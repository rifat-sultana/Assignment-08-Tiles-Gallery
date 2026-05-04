import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let client;
let db;

if (!global.mongoClientInstance) {
  client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  global.mongoClientInstance = client;
} else {
  client = global.mongoClientInstance;
}

db = client.db("tiles_gallery");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});