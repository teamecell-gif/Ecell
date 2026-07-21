"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Hourglass } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-ecell/10 to-ecell-deep/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Animated Hourglass Icon */}
          <div className="mb-8 p-4 bg-gray-900/40 border border-gray-800 rounded-full backdrop-blur-sm shadow-xl animate-pulse">
            <Hourglass className="h-12 w-12 text-ecell" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-ecell to-ecell-deep mb-4">
            {title}
          </h1>

          {/* Decorative Divider */}
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-8" />

          {/* Tagline */}
          <p className="text-gray-400 text-lg sm:text-xl font-light mb-12">
            Something exciting is on the horizon. We are currently working hard to bring you a premium experience. Stay tuned!
          </p>

          {/* Back Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-ecell text-ecell hover:bg-ecell hover:text-white transition-all duration-300 rounded-lg text-sm font-semibold tracking-wider uppercase hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
