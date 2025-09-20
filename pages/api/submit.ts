import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("launchpadDB"); // Your DB name
    const collection = db.collection("proposals");

    const formData = req.body;

    // Optional: add timestamp
    formData.createdAt = new Date();

    const result = await collection.insertOne(formData);

    res.status(200).json({ message: "Form submitted successfully!", id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error", error });
  }
}
