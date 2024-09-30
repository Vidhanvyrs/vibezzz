// import Main from "@/components/Main";
import MemesComponent from "@/components/Memes";
import { Fugaz_One, Open_Sans } from "next/font/google";

export const metadata = {
  title: "Vibezz • Dashboard • gimmememes",
};
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function MemesPage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-4 space-y-4 sm:p-8 ">
      <h1
        className={
          "md:text-4xl text-xl text-nowrap sticky text-black " + fugaz.className
        }
      >
        Get your Memes Related to your Mood
      </h1>
      <MemesComponent />
    </main>
  );
}
