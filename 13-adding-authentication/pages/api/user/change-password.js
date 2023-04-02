import { getSession } from "next-auth/react";
import { verifyPassword, hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  console.log(session.user);
  const existingUser = await usersCollection.findOne({ email: userEmail });
  console.log(existingUser);
  if (!existingUser) {
    res.status(404).json({ message: "User not found." });

    client.close();
    return;
  }

  const isValidPassword = await verifyPassword(
    oldPassword,
    existingUser.password
  );

  if (!isValidPassword) {
    res.status(403).json({ message: "Invalid password." });

    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  const result = await usersCollection.updateOne(
    { email: userEmail },
    {
      $set: {
        password: hashedPassword,
      },
    }
  );

  res.status(200).json({ message: "Password updated!." });

  client.close();
}

export default handler;
