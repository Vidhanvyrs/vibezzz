"use client";

import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import { Loading } from "./Loading";
// import { useAuth } from "@/context/AuthContext";
// import InfiniteScroll from "react-infinite-scroll-component";

function MemesComponent(props) {
  const [memeUrls, setMemeUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { mymood } = props;
  const getMemes = async () => {
    let arr = ["wholesomememes", "memes", "MadeMeSmile", "dankmemes"];
    if (mymood == 1) {
      let arr = ["wholesomememes", "memes", "MadeMeSmile", "dankmemes"];
    } else if (mymood == 2) {
      arr = [
        "UpliftingNews",
        "sadposting",
        "CozyPlaces",
        "HumansAreMEtal",
        "me_irl",
        "2meirl4meirl",
        "astrophotography",
        "space",
        "distressingmemes",
        "funny",
        "MadeMeSmile",
        "motivation",
        "GetMotivated",
        "sexmemes",
      ];
    } else if (mymood == 3) {
      arr = [
        "me_irl",
        "suicidebywords",
        "memes",
        "dankmemes",
        "puns",
        "BeAmazed",
        "itookapicture",
        "2meirl4meirl",
        "ExposurePorn",
        "100yearsago",
        "4chan",
        "bollywoodmemes",
        "SweatyPalms",
      ];
    } else if (mymood == 4) {
      arr = [
        "gifMemes",
        "ProgrammerHumor",
        "dcmemes",
        "marvelmemes",
        "puns",
        "HighQualityGifs",
        "AdviceAnimals",
        "animememes",
        "Animememes",
        "HistoryMemes",
        "moviememes",
        "HistoryPorn",
        "",
      ];
    } else if (mymood == 5) {
      arr = [
        "ArtefactPron",
        "Art",
        "artstore",
        "computergraphics",
        "conceptart",
        "dataisbeautiful",
        "HumansAreMEtal",
        "theydidthemath",
        "AnimalMemes",
        "HighQualityGifs",
        "wholesome",
        "wholesomememes",
        "eyebleach",
        "aww",
      ];
    }
    let currsub = ""; // Current picked string

    function pickRandomSubreddit() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * arr.length);
      } while (arr[randomIndex] === currsub);

      currsub = arr[randomIndex];
      return currsub;
    }

    // Example usage:
    pickRandomSubreddit();
    console.log(currsub);

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://meme-api.com/gimme/${currsub}/12`);
      if (!response.ok) {
        throw new Error("Failed to fetch memes");
      }
      const result = await response.json();
      console.log(result);
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
          //   <Link href={url}>
          <CardComponent key={index} imageUrl={url} />
          //   </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {isLoading ? (
          <Loading />
        ) : (
          <button
            onClick={getMemes}
            disabled={isLoading}
            className="px-4 py-2 text-white transition-colors bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Load More Memes
          </button>
        )}
      </div>
    </div>
  );
}

export default MemesComponent;
