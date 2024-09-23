"use client";

import { useState, useEffect } from "react";
import { Share2, Heart, MessageCircle } from "lucide-react";

export default function CardComponent({ imageUrl }) {
  const [mounted, setMounted] = useState(false);

  //   const [aspectRatio, setAspectRatio] = useState(1);

  //   useEffect(() => {
  //     setMounted(true);
  //     const img = new Image();
  //     img.src = imageUrl;
  //     img.onload = () => {
  //       setAspectRatio(img.width / img.height);
  //     };
  //   }, [imageUrl]);

  //   if (!mounted) {
  //     return null;
  //   }

  //   const spanRows = aspectRatio > 1 ? 2 : 1;
  return (
    // <div className={`w-full ${spanRows > 1 ? "row-span-2" : ""}`}>
    <div className="columns-xs">
      <div className="relative h-full overflow-hidden transition-colors duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
        <img src={imageUrl} alt="Meme" className="object-cover w-full h-full" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="p-2 text-white rounded-full bg-white/20 backdrop-blur-sm">
                <Heart size={20} />
              </button>
              <button className="p-2 text-white rounded-full bg-white/20 backdrop-blur-sm">
                <MessageCircle size={20} />
              </button>
            </div>
            <button className="p-2 text-white rounded-full bg-white/20 backdrop-blur-sm">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
