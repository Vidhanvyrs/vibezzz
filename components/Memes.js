"use client";

import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";

function MemesComponent() {
  const [memeUrls, setMemeUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMemes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        // "https://meme-api.com/gimme/wholesomememes/20"
        "https://meme-api.com/gimme/20"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch memes");
      }
      const result = await response.json();
      const newUrls = result.memes.map((meme) => meme.url);
      setMemeUrls((prevUrls) => [...prevUrls, ...newUrls]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <div className="container p-4 mx-auto space-y-4">
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {memeUrls.map((url, index) => (
          <CardComponent key={index} imageUrl={url} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={getMemes}
          disabled={isLoading}
          className="px-4 py-2 text-white transition-colors bg-purple-600 rounded-md hover:bg-purple-700"
        >
          {isLoading ? "Loading..." : "Load More Memes"}
        </button>
      </div>
    </div>
  );
}

export default MemesComponent;
