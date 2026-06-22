const { MongoClient } = require("mongodb");

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

let db = null;

async function connectDB() {
  try {
    if (!db) {
      await client.connect();
      db = client.db(); 
      console.log("DB Connected!");
    }

    return db;
  } catch (error) {
    console.log("DB connection error", error);
    throw error;
    console.log("DB URL =", process.env.MONGO_URI);
  }
}

module.exports = connectDB;