"use client";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  const tiles = [
    "Ceramic Blue Tile",
    "Marble White Tile",
    "Modern Grey Tile",
  ];

  return (
    <div className="bg-white text-black py-2 text-sm my-5 shadow">
      <Marquee pauseOnHover speed={50}>
        {tiles.map((tile, index) => (
          <span key={index} className="mx-4">
            New Arrivals: {tile}
          </span>
        ))}
        | Weekly Feature: Modern Geometric Patterns | Join the Community...
      </Marquee>
    </div>
  );
};

export default MarqueeText;