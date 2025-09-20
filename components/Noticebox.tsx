"use client";
import React from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";

const LaunchpadBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0298F9] to-[#086BEA] py-4 px-6">
      <div className="container mx-auto flex items-center justify-center gap-4 text-white">
        <Rocket className="w-5 h-5 animate-pulse" />
        <span className="text-sm md:text-base font-medium">
          Launchpad Registration Open
        </span>
        <Link
          href="/launchpad" 
          className="bg-white text-[#0298F9] px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 hover:shadow-lg"
        >
          Click to Register
        </Link>
      </div>
    </div>
  );
};

export default LaunchpadBanner;