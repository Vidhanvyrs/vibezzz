"use client";
import { Fugaz_One } from "next/font/google";
import React, { useEffect } from "react";
import Button from "./Button";
import Calendar from "./Calendar";
import Link from "next/link";
import CallToAction from "./callToAction";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  useEffect(() => {
    const emojiCursor = document.createElement("div");
    emojiCursor.innerText = "📅";
    emojiCursor.style.position = "absolute";
    emojiCursor.style.fontSize = "24px";
    emojiCursor.style.pointerEvents = "none";
    emojiCursor.style.display = "none";
    document.body.appendChild(emojiCursor);

    const handleMouseMove = (event) => {
      emojiCursor.style.left = `${event.clientX}px`;
      emojiCursor.style.top = `${event.clientY}px`;
    };

    const handleMouseOver = () => {
      emojiCursor.style.display = "block";
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseOut = () => {
      emojiCursor.style.display = "none";
      document.removeEventListener("mousemove", handleMouseMove);
    };

    const targetElement = document.getElementById("emoji-target");
    targetElement.addEventListener("mouseover", handleMouseOver);
    targetElement.addEventListener("mouseout", handleMouseOut);

    return () => {
      targetElement.removeEventListener("mouseover", handleMouseOver);
      targetElement.removeEventListener("mouseout", handleMouseOut);
      document.body.removeChild(emojiCursor);
    };
  }, []);
  return (
    <div className="flex flex-col gap-8 py-4 md:py-10 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient">Vibezz</span> helps you track your{" "}
        <span className="textGradient"> daily </span>mood!
      </h1>
      <p className="w-full mx-auto text-lg text-center sm:text-xl md:text-2xl max-w-[600px]">
        Create your mood record and see how you feel on{" "}
        <span
          id="emoji-target"
          className="font-semibold underline hover:text-[#818cf8]"
        >
          every day of every year.
        </span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
