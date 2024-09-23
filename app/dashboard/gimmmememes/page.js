import Main from "@/components/Main";
import MemesComponent from "@/components/Memes";
export const metadata = {
  title: "Vibezz • Dashboard • gimmememes",
};

export default function MemesPage() {
  return (
    <main className="flex items-center justify-center flex-1 p-4 felx-col sm:p-8 ">
      <MemesComponent />
    </main>
  );
}
