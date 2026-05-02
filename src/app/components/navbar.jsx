"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/logo-design.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const pathname = usePathname(); 

 
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(null);
    }
  }, [pathname]);

  // 🚪 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="container mx-auto shadow">
      <nav className="flex justify-between items-center px-6 py-2 font-semibold shadow-2xs">

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

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/all-tiles">All Tiles</Link>

         
          {user && <Link href="/profile">My Profile</Link>}
        </div>

      
        <div className="flex gap-4">
          {!user ? (
            <Link href="/login">
              <button className="bg-gray-100 text-black px-4 py-1 font-bold rounded">
                Login
              </button>
            </Link>
          ) : (
            <>
             

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