"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-mauve-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        
        <div>
          <h2 className="text-2xl font-bold mb-3">Tiles Gallery</h2>
          <p className="text-sm text-gray-300">
            Discover high-quality ceramic, marble, and porcelain tiles for your dream home.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tiles">All Tiles</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: support@tiles.com</p>
          <p className="text-sm text-gray-00">Phone: +880 1234 567890</p>

          <div className="flex gap-4 mt-4">
            <a href="#"><FaFacebook size={24}/>Facebook</a>
            <a href="#"><FaInstagram size={24}/>Instagram</a>
            <a href="#"><FaTwitter size={24}/>Twitter</a>
          </div>

        </div>

      </div>

      {/* 🔻 Bottom */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-400 py-4">
        © 2026 Tiles Gallery. All rights reserved.
      </div>
    </footer>
  );
}

