"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/app/assets/logodesign.png";


export default function Navbar() {
  const [user, setUser] = useState(null); // null = logged out

  const handleLogin = () => {
    setUser({ name: "" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="container mx-auto"> 
    <nav className="flex justify-between items-center px-6 py-2 bg-gray-200 shadow">

      {/* Logo */}
      <Link href="/">
        <Image src={Logo} alt="logo" width={150} height={150} className="bg-slate-400 object-cover" />
      </Link>

      {/* CENTER: LINKS */}
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/tiles">All Tiles</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      {/* RIGHT: DYNAMIC */}
      <div className="flex gap-4">
        {!user ? (
          <button
            onClick={handleLogin}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Login
          </button>
        ) : (
          <>
            <Link href="/profile">Profile</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>

    </nav>
    </div>
  );
}