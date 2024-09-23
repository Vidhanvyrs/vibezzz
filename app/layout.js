import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Vibezz",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  //we are going to do some cleanup first
  const header = (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 p-4 bg-white sm:p-8">
      <Link href={"/"}>
        <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
          Vibezz
        </h1>
      </Link>
      <Link href={"/dashboard/gimmmememes"}>
        <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
          gimmeMEMES!
        </h1>
      </Link>
      <Logout />
    </header>
  );
  const footer = (
    <footer className="grid p-4 sm:p-8 place-items-center">
      <p className={"text-indigo-500 " + fugaz.className}>Created with 💛</p>
    </footer>
  );
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 " +
            opensans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
//the first step will be to make our desing mobile responsive
