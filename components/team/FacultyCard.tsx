"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FacultyMember } from "./types";
import { cardVariants } from "./animations";

export const FacultyCard = ({
  member,
  priority = false,
}: {
  member: FacultyMember;
  priority?: boolean;
}) => (
  <motion.div variants={cardVariants} className="motion-safe:will-change-transform">
    <div className="border-2 border-gradient-t-secondary scale-90 motion-safe:transition-all motion-safe:duration-300 hover:shadow-[0_0_30px_rgba(2,152,249,0.25)] hover:scale-[0.93]">
      <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
        <div className="relative w-full h-[320px]">
          <Image
            src={member.image}
            alt={`${member.name} — ${member.role}, E-Cell VNIT`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            placeholder="blur"
            priority={priority}
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center gap-2 mt-4">
      <span className="font-bold text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
        {member.name}
      </span>
      <span className="font-medium text-lg text-center text-white">
        {member.role}
      </span>
    </div>
  </motion.div>
);
