import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  sessions: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const client = await connectToDatabase();

        const userCollection = client.db().collection("users");

        const user = await userCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValidPassword = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          client.close();
          throw new Error("Could not log you in");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session }) {
      // add payload madeBy in token
      token.madeBy = "HakSoo";

      return token;
    },
    async session({ session, token }) {
      // add payload payload madeBy in session

      session.user.example = token.madeBy;

      return session;
    },
  },
});
