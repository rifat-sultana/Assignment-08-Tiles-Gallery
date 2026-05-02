// "use client";
import data from "../../../public/data.json";
import TileCard from "../components/TileCard";

const AllTilesPage = async() => {
  const res = await fetch('https://assignment-08-tiles-gallery.vercel.app/data.json')
   const tiles = await res.json();
  //  console.log(tiles)

   const allTiles = data;

  return (
       
      <div> 
      
        <h2 className=" text-[rgb(100,64,44)] text-3xl font-bold text-center mt-5"> Tiles Collections </h2>

     <div className="grid grid-cols-4 gap-6">
      {allTiles.map(tile => (
        <TileCard key={tile.id} tile={tile} />
      ))}
    </div>

    </div>
  );
};

export default AllTilesPage;
