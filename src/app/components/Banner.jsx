import Link from "next/link";

export default function Banner() {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/tilesbanner.jpg')" }}
    >
      <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Your Perfect Aesthetic
        </h1>

        <Link href="/tiles">
          <button className="bg-yellow-500 px-6 py-3 rounded text-lg font-semibold">
            Browse Now
          </button>
        </Link>

      </div>
    </div>
  );
}