"use client";
// import Main from "@/components/Main";
import MemesComponent from "@/components/Memes";
import { useAuth } from "@/context/AuthContext";
import { Fugaz_One, Open_Sans } from "next/font/google";

// export const metadata = {
//   title: "Vibezz • Dashboard • gimmememes",
// };
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function MemesPage() {
  const { userDataObj } = useAuth(); // Fetching user data from useAuth hook

  const now = new Date();
  const currmonth = now.getMonth(); // Adding 1 since getMonth() returns 0-based month
  const curryear = now.getFullYear();
  console.log(userDataObj);
  // Safely check if userDataObj is populated and has data for the current year and month
  let mymood = null;
  if (
    userDataObj &&
    userDataObj[curryear] &&
    userDataObj[curryear][currmonth]
  ) {
    const rating = userDataObj[curryear][currmonth]; // Access year and month data
    const days = Object.keys(rating).map(Number); // Get the days as numbers
    const latestDay = Math.max(...days); // Find the latest day
    const latestDayData = rating[latestDay]; // Get data for the latest day

    console.log("Data:", latestDayData);
    mymood = latestDayData;
  } else {
    console.log("No data available for the current year and month.");
  }
  console.log(mymood);
  let feeling = "";

  if (mymood == 1) {
    feeling = "Why feel Angry, Just be Memey!";
  } else if (mymood == 2) {
    feeling = "Don't shed no Tears, Smile for Memers!";
  } else if (mymood == 3) {
    feeling = "End this Boredom, Get a bowl of MemeKingdom!";
  } else if (mymood == 4) {
    feeling = "Goodness in you keeps you going, Enjoy the Memes!";
  } else if (mymood == 5) {
    feeling = "Feeling of Gratefulness is why you get delicious Memes!";
  }
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-4 space-y-4 sm:p-8 ">
      <h1
        className={
          "md:text-4xl text-xl text-nowrap sticky text-black " + fugaz.className
        }
      >
        {feeling}
      </h1>
      <MemesComponent mymood={mymood} />
    </main>
  );
}
