
import Image from "next/image";
const TileDetailsPage = async ({params}) => {
  const {id}= await params;
  const res = await fetch('https://assignment-08-tiles-gallery.vercel.app/data.json')
   const tiles = await res.json();




    const tile = tiles.find(item => item.id === id);
  console.log("tile:", tile);


  

  return (
    <div className="max-w-6xl mx-auto p-6">


      <div className="grid md:grid-cols-2 gap-8 items-center">

        {/*image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right side */}
        <div className="space-y-4">

          <h1 className="text-3xl font-bold text-gray-800">
            {tile.title}
          </h1>

          <p className="text-gray-600">
            <strong>Creator:</strong> {tile.creator || "Unknown"}
          </p>

          <p className="text-gray-700">
            <strong>Description:</strong> {tile.description}
          </p>

          <p className="text-gray-700">
            <strong>Category:</strong> {tile.category}
          </p>

          {/*tags*/}
          <div>
            <strong>Tags:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {tile.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;
