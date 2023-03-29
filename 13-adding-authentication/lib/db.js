import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://dbUser_auth:j9SmcMwqm1bnZVRm@cluster0.jhcssab.mongodb.net/auth?retryWrites=true&w=majority"
  );

  return client;
}
