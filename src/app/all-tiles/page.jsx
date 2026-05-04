"use client";

import React, { useState, useEffect } from 'react';
import TileCard from "../components/TileCard";

const AllTilesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        const fetchTiles = async () => {
            try {
                const res = await fetch('https://assignment-08-tiles-gallery.vercel.app/data.json');
                const result = await res.json();
                setTiles(result);
            } catch (error) {
                console.error("Data fetch korte error hoyeche:", error);
            }
        };
        fetchTiles();
    }, []);

    // EKAHNE CHANGE KORA HOYECHE
    const filteredTiles = tiles.filter(tile =>
        tile?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-8 gap-4">
                <h2 className="text-[rgb(100,64,44)] text-3xl font-bold">
                    Tiles Collections
                </h2>

                <div className="form-control">
                    <div className="flex items-center border border-[rgb(100,64,44)] rounded-lg overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search by tile name..."
                            className="input input-ghost w-full max-w-xs focus:outline-none px-4 py-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-[rgb(100,64,44)] p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {filteredTiles.length > 0 ? (
                    filteredTiles.map(tile => (
                        <TileCard key={tile.id} tile={tile} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-gray-500 text-xl font-medium">
                            No tiles found matching{searchTerm}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTilesPage;