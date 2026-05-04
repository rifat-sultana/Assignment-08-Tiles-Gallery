"use client";
import Link from "next/link";
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
    
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}

      <div className="bg-gray-200 rounded-2xl text-center text-amber-800 overflow-hidden shadow-2xl hover:shadow-2xl transition duration-300 mt-10 animate__animated animate__zoomIn">
        
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Button */}
        <div className="p-4">
    <Link href={`/all-tiles/${tile.id}`}>
    <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition">
      View Details
    </button>
  </Link>
</div>

      </div>
    </>
  );
};

export default TileCard;