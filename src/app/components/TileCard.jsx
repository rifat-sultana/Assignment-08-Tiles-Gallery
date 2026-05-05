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
        

        {/* Image */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

          {/* Title */}
        <div className="p-3 flex flex-col justify-between grow text-center">
          <h3 className="text-lg font-bold text-red-900  mb-2 leading-tight">
            {tile.title}
          </h3>
        </div>


        {/* Button */}
        <div className="p-4">
          <Link href={`/all-tiles/${tile.id}`}>
            <button className="w-full py-2 bg-gray-500 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
              View Details
              </button>
              </Link>
        </div>

      </div>
    </>
  );
};

export default TileCard;