"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";
import { FaUserCircle } from "react-icons/fa";


export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user ?? null;
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <div className="container mx-auto shadow">
      <nav className="flex justify-between items-center px-6 py-2 font-semibold shadow-2xs">
        <Link href="/">
          <Image
            src="/logo-design.png"
            alt="logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="px-4 py-2 transition-all duration-300 rounded-md hover:border hover:border-gray-300 hover:shadow-md"> Home </Link>
          <Link href="/all-tiles" className="px-4 py-2 transition-all duration-300 rounded-md hover:border hover:border-gray-300 hover:shadow-md"> All Tiles </Link>
          <Link href="/profile" className=" px-4 py-2 transition-all duration-300 rounded-md hover:border hover:border-gray-300 hover:shadow-md"> My Profile </Link>
        </div>

       
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              
              <FaUserCircle className="text-3xl text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
              
              <button
                onClick={handleLogin}
                className="px-6 py-2 font-bold transition-all duration-300 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-md hover:bg-gray-50">
                Login
              </button>
            </>
          ) : (
            <>
             
              {user.image ? (
                <Image src={user.image} alt="User" width={32} height={32} className="rounded-full" />
              ) : (
                <FaUserCircle className="text-3xl text-gray-600" />
              )}
              
              <button
                onClick={handleLogout}
                className="px-6 py-2 font-bold transition-all duration-300 rounded-lg border border-transparent hover:border-gray-300 hover:shadow-md hover:bg-gray-50">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}