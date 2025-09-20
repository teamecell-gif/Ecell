import dotenv from "dotenv";
import { MongoClient } from "mongodb";

// Load environment variables from .env
dotenv.config();

const uri = process.env.MONGODB_URI;

async function testConnection() {
  if (!uri) {
    console.error("❌ Please set MONGODB_URI in your .env file");
    return;
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();

    console.log("✅ MongoDB connected successfully!");

    const databases = await client.db().admin().listDatabases();
    console.log("Databases:");
    databases.databases.forEach(db => console.log(` - ${db.name}`));

    await client.close();
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
}

testConnection();
