"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";

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
          <Link href="/">Home</Link>
          <Link href="/all-tiles">All Tiles</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        <div className="flex gap-4">
          {!user ? (
            <button
              onClick={handleLogin}
              className="bg-gray-100 text-black px-4 py-1 font-bold rounded"
            >
              Login
            </button>
          ) : (
            <>
              {/* <Link href="/profile">Profile</Link> */}
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