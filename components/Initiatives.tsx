"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import SectionBackground from "./ui/SectionBackground";
import type { StaticImageData } from "next/image";

interface Initiative {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  link: string;
  imageAlt: string;
  external?: boolean;
}

const initiativesData: Initiative[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    description:
      "Got an idea that can change the game? Launchpad is your chance to pitch, build, and shine! Join E-Cell's ultimate idea-stage startup competition, get mentored by industry pros, and take your first step toward becoming a founder. Registrations are now open — let's launch your dream!",
    image: "/assets/LP.webp",
    link: "/launchpad",
    imageAlt: "Launchpad Initiative",
    external: false,
  },
  {
    id: "neo",
    title: "Neo",
    description:
      "National Entrepreneurship Olympiad is a PAN-India examination and a skill enhancement program for students of class 6th to 12th grade to nurture and test their entrepreneurial skills. This Olympiad includes sections like Basic Entrepreneurial Concepts, Value Proposition, Finances and more.",
    image: "/assets/NEO.webp",
    link: "https://neo.ecellvnit.org/",
    imageAlt: "NEO Initiative",
    external: true,
  },
];

/* ─── Animation variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ─── Initiative Card ─────────────────────────────────────────── */
const InitiativeCard = ({
  initiative,
  reversed = false,
}: {
  initiative: Initiative;
  reversed?: boolean;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div
      className={`group flex flex-col items-center gap-10 rounded-2xl bg-white/[0.03] backdrop-blur-sm p-8 md:p-12 transition-colors duration-300 hover:bg-white/[0.06] ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
    >
      {/* Logo / Image */}
      <div className="flex w-full items-center justify-center lg:w-2/5">
        <div className="relative h-36 w-64 md:h-44 md:w-72 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={initiative.image}
            alt={initiative.imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col gap-6 lg:w-3/5">
        <h3 className="text-3xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-ecell to-ecell-deep md:text-4xl">
          {initiative.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/70 md:text-base lg:text-lg lg:leading-8">
          {initiative.description}
        </p>
        <Link
          href={initiative.link}
          target={initiative.external ? "_blank" : undefined}
          rel={initiative.external ? "noopener noreferrer" : undefined}
          className="group/link inline-flex items-center gap-2 text-ecell font-semibold uppercase tracking-wider text-sm transition-colors duration-300 hover:text-ecell-light w-fit"
        >
          Explore {initiative.title}
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
);

/* ─── Main Section ────────────────────────────────────────────── */
const Initiatives = () => {
  return (
    <section id="initiatives" className="mt-20 bg-black py-16">
      <SectionBackground variant="particles">
        <div className="bg-gradient-to-b from-transparent to-black/20">
          <SectionHeader category="Our Programs" title="Initiatives" />

          <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-10 px-6">
            {initiativesData.map((initiative, index) => (
              <InitiativeCard
                key={initiative.id}
                initiative={initiative}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </SectionBackground>
    </section>
  );
};

export default Initiatives;
