import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  const body = await req.json();

  if (body.type === "user.created") {
    const user = {
      clerkId: body.data.id,
      email: body.data.email_addresses[0].email_address,
      firstName: body.data.first_name,
      lastName: body.data.last_name,
      createdAt: new Date(),
    };

    try {
      await client.connect();
      const db = client.db("your-db-name");
      const users = db.collection("users");
      await users.insertOne(user);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
      console.error("MongoDB insert error:", err);
      return new Response(JSON.stringify({ error: "DB insert failed" }), { status: 500 });
    } finally {
      await client.close();
    }
  }

  return new Response(JSON.stringify({ ignored: true }), { status: 200 });
}