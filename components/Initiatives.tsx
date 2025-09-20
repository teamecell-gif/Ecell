"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { Rocket } from "lucide-react";

interface Initiative {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  link: string;
  imageAlt: string;
}

const initiativesData: Initiative[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    description:
      "Got an idea that can change the game?  Launchpad is your chance to pitch, build, and shine! Join E-Cell's ultimate idea-stage startup competition, get mentored by industry pros, and take your first step toward becoming a founder. Registrations are now open - let's launch your dream!.",
    image: "/assets/LP.png",
    link: "/launchpad",
    imageAlt: "Launchpad Initiative",
  },
  {
    id: "neo",
    title: "Neo",
    description:
      "National Entrepreneurship Olympiad is a PAN - India examination and a skill enhancement program for the students of class 6th to 12th grade to nurture and test their entrepreneurial skills. This Olympiad includes sections like Basic Entrepreneurial Concepts, Value Proposition, Finances...",
    image: "/assets/NEO.png",
    link: "https://neo.ecellvnit.org/",
    imageAlt: "NEO Initiative",
  },
  {
    id: "csuites",
    title: "C-suites",
    description:
      "C-Suites is a community of like-minded people within VNIT Nagpur where we grow ourselves individually along with people around us. The mission seeks to create a self-sustained ecosystem, where peers discuss and learn from each other through regular group interactions.",
    image: "/assets/CS.png",
    link: "https://csuites.ecellvnit.org/",
    imageAlt: "C-Suites Initiative",
  },
];

const GradientLine = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-full max-w-md ${className}`}
    height="1"
    viewBox="0 0 400 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="0.5" x2="400" y2="0.5" stroke="url(#paint0_linear)" />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="1"
        x2="400"
        y2="1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.5" stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const InitiativeCard = ({
  initiative,
  index,
}: {
  initiative: Initiative;
  index: number;
}) => (
  <div className="flex flex-col items-center justify-start group h-full">
    {/* Logo area with fixed height */}
    <div className="flex flex-col items-center mb-8">
      <div className="relative h-24 w-48 flex items-center justify-center">
        <Image
          src={initiative.image}
          alt={initiative.imageAlt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <GradientLine className="mt-4" />
    </div>

    {/* Content Card */}
    <div className="w-full max-w-sm bg-[#161616] p-8 flex flex-col justify-between h-full min-h-[380px] transition-all duration-300 group-hover:bg-[#1a1a1a] rounded-lg">
      <div className="flex-1">
        <h3 className="uppercase font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA] mb-4">
          {initiative.title}
        </h3>
        <p className="text-sm xl:text-base text-white leading-relaxed">
          {initiative.description}
        </p>
      </div>

      <Link
        href={initiative.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase text-center text-lg py-4 mt-8 text-white font-semibold transition-all duration-300 hover:from-[#0287E0] hover:to-[#075ADB] hover:shadow-lg hover:shadow-blue-500/25 rounded-md"
      >
        Know More
      </Link>
    </div>
  </div>
);

const Initiatives = () => {
  return (
    <div
      id="initiatives"
      className="min-h-screen mt-20 bg-black bg-[url('/assets/back.png')] bg-no-repeat bg-center bg-cover bg-blend-luminosity"
    >
      <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)]">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center justify-center text-5xl lg:text-7xl xl:text-[80px] font-bold mb-20">
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
            Initiatives
          </span>
          <svg
            width="450"
            height="1"
            viewBox="0 0 580 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full"
          >
            <line y1="0.5" x2="580" y2="0.5" stroke="url(#paint0_linear_header)" />
            <defs>
              <linearGradient
                id="paint0_linear_header"
                x1="622.006"
                y1="1"
                x2="-40.7939"
                y2="0.999999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.501042" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Dynamic Grid */}
        <div className="container mx-auto px-6">
          <div
            className={`grid gap-16 justify-center items-stretch ${
              initiativesData.length === 1
                ? "grid-cols-1 max-w-lg mx-auto"
                : initiativesData.length === 2
                ? "grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto"
                : initiativesData.length === 3
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
            }`}
          >
            {initiativesData.map((initiative, index) => (
              <InitiativeCard
                key={initiative.id}
                initiative={initiative}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
