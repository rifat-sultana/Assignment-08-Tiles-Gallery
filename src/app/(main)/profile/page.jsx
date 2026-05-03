"use client";
import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) return <div className="text-center mt-20">Loading...</div>;

  
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="card w-96 bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>
        <div className="flex flex-col items-center gap-4">
          <Image
            src={session.user.image || "https://via.placeholder.com/150"} 
            alt="Profile" 
            width={128}
            height={128}
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
          />
          <div className="text-center">
            <p className="text-lg font-semibold">{session.user.name}</p>
            <p className="text-gray-500">{session.user.email}</p>
          </div>
          
         
          <Link href="/profile/update">
            <button className="btn btn-primary mt-4 w-full">Update Information</button>
          </Link>
        </div>
      </div>
    </div>
  );
}