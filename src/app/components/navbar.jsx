"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/assets/logodesign.png";

export default function Navbar() {
  const [user, setUser] = useState(null);

  // ✅ FIX: client side এ user load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // LOGIN
  const handleLogin = () => {
    const userData = { name: "Rifat" };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // LOGOUT
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="container mx-auto shadow">
      <nav className="flex justify-between items-center px-6 py-2 font-semibold shadow-2xs ">

        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Center Links */}
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/all-tiles">All Tiles</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        {/* Right Side Dynamic */}
        <div className="flex gap-4">
          {!user ? (
            <button
              onClick={handleLogin}
              className="bg-gray-100 text-black px-4 py-1 font-bold rounded "
            >
              Login
            </button>
          ) : (
            <>
              <Link href="/profile">Profile</Link>
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-black px-4 py-1 font-bold rounded"
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