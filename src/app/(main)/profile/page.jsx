"use client";

import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();


  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login"); 
    }
  }, [session, isPending, router]);


  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  
  if (!session) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="card w-96 bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>

        <div className="flex flex-col items-center gap-4">
          <Image
            src={session?.user?.image || "https://via.placeholder.com/150"}
            alt="Profile"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
          />

          <div className="text-center">
            <p className="text-lg font-semibold">
              {session?.user?.name || "No Name"}
            </p>
            <p className="text-gray-500">
              {session?.user?.email || "No Email"}
            </p>
          </div>

          <Link href="/profile/update" className="w-full">
            <button className="btn btn-primary mt-4 w-full">
              Update Information
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}