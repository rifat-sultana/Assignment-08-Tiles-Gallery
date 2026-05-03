"use client";

import Link from "next/link";
import { useState } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/assets/logodesign.png";


export default function Navbar() {
  const [user, setUser] = useState(null); // null = logged out
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
    setUser({ name: "" });
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
    <div className="container mx-auto  shadow">
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
          <Link href="/tiles">All Tiles</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        {/* Right Side Dynamic */}
        <div className="flex gap-4">
          {!user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleLogin}
              className="bg-gray-100 text-black px-4 py-1 font-bold rounded "
            >
              Logout
              Login
            </button>
          </>
        )}
      </div>
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
      </nav>
    </div>
  );
}