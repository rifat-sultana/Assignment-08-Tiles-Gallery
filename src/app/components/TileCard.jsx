"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TileCard = ({ tile }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);

 
    setTimeout(() => {
      router.push(`/all-tiles/${tile.id}`);
    }, 800);
  };

  return (
    <>
      {/* 🔥 Full Screen Loader */}
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}

      <div className="bg-gray-200 rounded-2xl text-center text-amber-800 overflow-hidden shadow-2xl hover:shadow-2xl transition duration-300 mt-10">
        
        {/* Title */}
        <div className="p-4 pt-2">
          <h3 className="text-lg font-bold my-5">
            {tile.title}
          </h3>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Button */}
        <div className="p-4">
          <button
            onClick={handleClick}
            className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            View Details
          </button>
        </div>

      </div>
    </>
  );
};

export default TileCard;