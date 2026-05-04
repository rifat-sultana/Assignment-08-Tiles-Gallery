import Link from "next/link";

export default function Banner() {
  return (
    <div
        className="w-full min-h-[70vh] md:min-h-[90vh] bg-cover bg-center px-3 md:px-6 pb-4"
      style={{ backgroundImage: "url('/tilesbanner.jpg')" }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-white text-center rounded-xl">
        
        <h1  className="text-2xl sm:text-3xl md:text-6xl text-amber-950 font-bold mt-15 md:mb-5">
          Discover Your Perfect Aesthetic
        </h1>

        <p className=" mb-10 text-md font-bold text-gray-800">
          Where design meets durability — discover tiles that bring your vision to life. <br />
          Enhance every corner with textures, patterns, and finishes crafted for modern living. <br />
        </p>

        <Link href="/tiles">
          <button   className="bg-gray-700 hover:bg-red-700 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold mt-2">
            Browse Now
          </button>
        </Link>

      </div>
    </div>
  );
} 