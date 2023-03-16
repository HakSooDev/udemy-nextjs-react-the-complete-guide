import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect("");

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}
