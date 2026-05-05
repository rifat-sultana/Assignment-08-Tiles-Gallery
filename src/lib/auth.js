import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

function getAuthBaseURL() {

  const rawUrl =
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
    process.env.PUBLIC_BETTER_AUTH_URL ||
    process.env.VERCEL_URL;

  
  if (!rawUrl || typeof rawUrl !== 'string') {
    return undefined;
  }


  if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
    return rawUrl;
  }


  return `https://${rawUrl}`;
}

let client;


if (!global.mongoClientInstance) {
  client = new MongoClient(process.env.MONGODB_URI);

  await client.connect(); 
  global.mongoClientInstance = client;
} else {
  client = global.mongoClientInstance;
}

const db = client.db("tiles_gallery");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: getAuthBaseURL(),
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