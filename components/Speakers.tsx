"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Speaker } from "@/data/speakers";

interface SpeakersProps {
  speakers: Speaker[];
}

const initialsFor = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

import SectionHeader from "./ui/SectionHeader";

const SpeakerCard = ({
  speaker,
  isDuplicate = false,
}: {
  speaker: Speaker;
  isDuplicate?: boolean;
}) => {
  const [mounted, setMounted] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <article
      aria-hidden={isDuplicate}
      className="relative h-[360px] w-[270px] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:h-[400px] sm:w-[300px]"
    >
      {!mounted ? (
        <div className="absolute inset-0 bg-[#101010]" />
      ) : imageFailed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0B1A33] via-[#101010] to-[#060F1F]">
          <span className="text-6xl font-bold text-white/25">
            {initialsFor(speaker.name)}
          </span>
        </div>
      ) : (
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          sizes="300px"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-5 pb-5 pt-20">
        <h3 className="text-xl font-bold leading-tight text-white">
          {speaker.name}
        </h3>
        <p className="mt-2 text-sm leading-5 text-white/75">
          {speaker.designation}
        </p>
      </div>
    </article>
  );
};

const Speakers = ({ speakers }: SpeakersProps) => {
  const marqueeSpeakers = [...speakers, ...speakers];

  return (
    <section id="speakers" className="bg-[#050505] py-20">
      <SectionHeader category="Keynote Luminaries" title="Past Speakers" />

      <div className="mt-16 overflow-hidden">
        <div className="speakers-marquee-track flex w-max flex-nowrap gap-6 px-6">
          {marqueeSpeakers.map((speaker, index) => (
            <SpeakerCard
              key={`${speaker.name}-${index}`}
              speaker={speaker}
              isDuplicate={index >= speakers.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
