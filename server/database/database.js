import { MongoClient } from "mongodb";
import { config } from "../config.js";

// Replace the uri string with your connection string.

const client = new MongoClient(config.db.host);

let db;
export async function connectDB() {
  // Connect the client to the server (optional starting in v4.7)
  await client.connect();
  // Establish and verify connection
  db = client.db("movieArchive");
  console.log("Connected successfully to Mongo DB server");
}

export async function getUserCollection() {
  return db.collection("users");
}

export async function createUser(userInfo) {
  const users = await getUserCollection();
  // Insert a single document, wait for promise so we can read it back
  await users.insertOne(userInfo);
  // // Find one document
  const user = await users.findOne({ username: userInfo.username });
  return user;
}

// products 관련 코드

export async function getPostCollection() {
  return db.collection("posts");
}

export async function createPost(post) {
  const postCollection = await getPostCollection();
  await postCollection.insertOne(post);
  return post;
}

export async function getPosts(userId) {
  const postCollection = await getPostCollection();
  const posts = await postCollection.find({
    userId: userId
  }).toArray();
  return posts;
}

// export async function run() {
//   try {
//     const database = client.db("movieArchive");
//     const users = database.collection("users");
//     const query = { username: "hyemi" };
//     const user = await users.findOne(query);
//     // since this method returns the matched document, not a cursor, print it directly
//     console.log("user", user);
//   } finally {
//     await client.close();
//   }
// }

// let db;
// export async function connectDB() {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");
//     db = client.db("movieArchive");
//   } catch (err) {
//     console.log(err.stack);
//   }
// }
