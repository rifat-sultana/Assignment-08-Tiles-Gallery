import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

function getAuthBaseURL() {
  // অগ্রাধিকার অনুযায়ী এনভায়রনমেন্ট ভেরিয়েবল চেক করা হচ্ছে
  const rawUrl =
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
    process.env.PUBLIC_BETTER_AUTH_URL ||
    process.env.VERCEL_URL;

  // যদি rawUrl খুঁজে না পাওয়া যায়, তবে undefined রিটার্ন করবে
  if (!rawUrl || typeof rawUrl !== 'string') {
    return undefined;
  }

  // যদি অলরেডি http/https থাকে তবে সেটিই রিটার্ন করবে
  if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
    return rawUrl;
  }

  // অন্যথায় https:// যোগ করে রিটার্ন করবে
  return `https://${rawUrl}`;
}

let client;

// MongoDB কানেকশন হ্যান্ডলিং (Singleton pattern)
if (!global.mongoClientInstance) {
  client = new MongoClient(process.env.MONGODB_URI);
  // নোট: টপ-লেভেল এওয়েট ব্যবহার করতে আপনার এনভায়রনমেন্ট সাপোর্ট প্রয়োজন
  await client.connect(); 
  global.mongoClientInstance = client;
} else {
  client = global.mongoClientInstance;
}

const db = client.db("tiles_gallery");

export const auth = betterAuth({
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