// import React from 'react';
import TileCard from './TileCard';
import data from "../../../public/data.json";

const FeaturedTilesPage = async () => {
  const res = await fetch('https://assignment-08-tiles-gallery.vercel.app/data.json')
  const tiles = await res.json();
  // console.log(tiles)

  const allTiles = data;  
  const topTiles = tiles.slice(0,8)
  console.log(topTiles)


  return (
    <div className="px-8 py-10">
      <h2 className=" text-[rgb(100,64,44)]  text-4xl font-bold mt-10  text-center"> Elite Tiles Collection
         </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
         {topTiles.map(tile => <TileCard key={tile.id} tile={tile} />)}
    </div>

    </div>

 
     

  );
};

export default FeaturedTilesPage;