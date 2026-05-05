"use client";

import Link from "next/link";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";

export default function Home() {
  function handleClick() {
    const register = document.getElementById("register");
    register?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="mx-auto lg:w-[70%] max-w-6xl flex flex-col items-center pt-20 lg:pt-0 lg:justify-center h-[90vh] lg:h-screen space-y-5 px-5 lg:px-0">
      <div className="items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 w-max mx-auto">
        <p className="text-white text font-medium">KINGDOM STACK 2026</p>
      </div>

      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-white font-bold">
        Designing Systems that <br />
        <span className="text-blue-400">Serve the King</span>
      </h1>
      <p className="text-white/60 text-lg md:text-xl text-center">
        The Church is not a late adopter. Technology is no longer optional for
        the Church, it is a calling. Join faith-driven technologists, creatives,
        and problem-solvers for two days of building, learning, and reimagining
        systems that serve the King
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:gap-5 gap-2">
        <div className="flex items-center gap-2">
          <HiOutlineCalendar className="text-cyan-400 size-6" />
          <p className="text-white/50">July 17-18, 2026</p>
        </div>

        <div className="size-1 rounded-full bg-white/30"></div>

        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker className="text-purple-400 size-6" />
          <p className="text-white/50">
            Address: Victory City, Opp. OGTV, Abeokuta
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-5 w-full lg:w-auto">
        <Link
          href="#register"
          className=" w-full md:w-auto"
          onClick={handleClick}
        >
          <button className="px-8 py-3 w-full md:w-auto font-medium transition-all ease text-white rounded-full bg-blue-500 hover:bg-blue-600">
            Register For Tech Fest
          </button>
        </Link>

        <Link
          href="#register"
          className=" w-full md:w-auto"
          onClick={handleClick}
        >
          <button className="w-full md:w-auto px-8 py-3 font-medium transition-all ease bg-white rounded-full text-violet-300 hover:bg-transparent border border-transparent hover:text-white hover:border-violet-500/70">
            Register For Hackathon
          </button>
        </Link>
      </div>
    </div>
  );
}
