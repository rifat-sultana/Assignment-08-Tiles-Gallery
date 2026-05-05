"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client"; 

const TileCard = ({ tile }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Better-auth session hook
  const { data: session } = authClient.useSession();

  const handleClick = () => {
    if (!session) {
      alert("Please login first to view details!");
      router.push("/login");
      return;
    }

    setLoading(true);

    // Simulated delay for the loading spinner
    setTimeout(() => {
      router.push(`/all-tiles/${tile.id}`);
    }, 800);
  };

  return (
    <>
     
      {loading && (
        <div className="fixed inset-0 bg-white/60 flex items-center justify-center z-50 backdrop-blur-sm">
          <span className="loading loading-spinner loading-xl  text-red-900"></span>
        </div>
      )}

      <div className="bg-gray-200 rounded-2xl text-center text-amber-800 overflow-hidden shadow-2xl hover:shadow-2xl transition duration-300 mt-10 animate__animated animate__zoomIn">
        
        {/* Image Section */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Title Section */}
        <div className="p-3 flex flex-col justify-between grow text-center">
          <h3 className="text-lg font-bold text-red-900 mb-2 leading-tight">
            {tile.title}
          </h3>
        </div>

        {/* Button Section */}
        <div className="p-4">
          <button 
            onClick={handleClick}
            className="w-full py-2 bg-gray-500 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default TileCard;