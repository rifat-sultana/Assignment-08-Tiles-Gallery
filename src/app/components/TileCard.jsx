
import Image from "next/image";

const TileCard = ({ tile }) => {
  // console.log(tile)
   return (
     <div className="bg-slate-100 rounded-2xl text-center text-amber-800 overflow-hidden shadow-2xl hover:shadow-2xl transition duration-300  mt-10 ">
      
      {/* Title (Top) */}
      <div className="p-4 pt-2">
        <h3 className="text-lg font-bold my-5 ">
          {tile.title}
        </h3>
      </div>

      {/* Image (Middle) */}
      <div className="relative w-full h-48 mt-2 b">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Button (Bottom) */}
      <div className="p-4">
        <button className="w-full bg-gray-600 text-white py-1 rounded-lg border hover:bg-gray-800 transition">
          View Details
        </button>
      </div>

    </div>
  );
};

export default TileCard;