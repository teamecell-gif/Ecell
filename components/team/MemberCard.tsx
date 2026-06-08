"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import type { TeamMember } from "./types";
import { cardVariants } from "./animations";
import { LinkedInIcon, EmailIcon, PhoneIcon } from "./Icons";

const SocialLinks = ({ member }: { member: TeamMember }) => (
  <div className="flex justify-center gap-5 mb-5">
    {member.linkedin && (
      <Link
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} LinkedIn profile`}
        className="p-2 motion-safe:transition-transform motion-safe:duration-200 hover:scale-125"
      >
        <LinkedInIcon />
      </Link>
    )}
    <Link
      href={`mailto:${member.email}`}
      aria-label={`Email ${member.name}`}
      className="p-2 motion-safe:transition-transform motion-safe:duration-200 hover:scale-125"
    >
      <EmailIcon />
    </Link>
    <Link
      href={`tel:${member.phone}`}
      aria-label={`Call ${member.name}`}
      className="p-2 motion-safe:transition-transform motion-safe:duration-200 hover:scale-125"
    >
      <PhoneIcon />
    </Link>
  </div>
);

/**
 * 3D tilt hook — tracks mouse position over a card and returns
 * rotateX / rotateY values to create a perspective tilt effect.
 * The photo area visually "pops out" because it's the largest surface.
 */
const useTilt = (intensity = 8) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // Normalise cursor position to -0.5 → +0.5
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setStyle({
        rotateX: -y * intensity, // tilt up/down
        rotateY: x * intensity,  // tilt left/right
      });
    },
    [intensity],
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({ rotateX: 0, rotateY: 0 });
  }, []);

  return { ref, style, handleMouseMove, handleMouseLeave };
};

export const MemberCard = ({
  member,
  featured = false,
  animateIndependent = false,
}: {
  member: TeamMember;
  featured?: boolean;
  animateIndependent?: boolean;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px) or (pointer: coarse)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const { ref, style, handleMouseMove, handleMouseLeave } = useTilt(
    featured ? 6 : 8,
  );

  return (
    <motion.div
      variants={cardVariants}
      initial={animateIndependent ? "hidden" : undefined}
      whileInView={animateIndependent ? "visible" : undefined}
      viewport={animateIndependent ? { once: true, amount: 0.05 } : undefined}
      className="motion-safe:will-change-transform"
    >
      <motion.div
        ref={ref}
        onMouseMove={isMobile ? undefined : handleMouseMove}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
        animate={isMobile ? undefined : style}
        transition={isMobile ? undefined : { type: "spring", stiffness: 300, damping: 20 }}
        style={isMobile ? undefined : { perspective: 800, transformStyle: "preserve-3d" }}
        className="cursor-pointer"
      >
        {/* Photo container — sits on a raised "layer" via translateZ */}
        <div
          className={`
            border-2 border-gradient-t-secondary
            ${featured ? "scale-95" : "scale-90"}
            motion-safe:transition-shadow motion-safe:duration-300
            hover:shadow-[0_8px_40px_rgba(2,152,249,0.3)]
          `}
          style={isMobile ? undefined : { transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          <div className="bg-gradient-to-b from-[rgba(2,152,249,0)] to-[rgba(8,107,234,0.5)]">
            <div className={`relative w-full ${featured ? "h-[380px]" : "h-[320px]"}`}>
              <Image
                src={member.image}
                alt={`${member.name} — ${member.role}, E-Cell VNIT`}
                fill
                sizes={
                  featured
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                }
                className={`object-cover ${member.imageClass || "object-center"}`}
                placeholder={member.image.blurDataURL ? "blur" : "empty"}
                priority={featured}
              />
            </div>
          </div>
        </div>

        {/* Text + socials — sits closer to the surface (lower Z) */}
        <div
          className="flex flex-col justify-center gap-2 mt-4"
          style={isMobile ? undefined : { transform: "translateZ(10px)" }}
        >
          <span
            className={`
              font-bold text-center text-transparent bg-clip-text
              bg-gradient-to-b from-[#0298F9] to-[#086BEA] [text-wrap:balance]
              ${featured ? "text-3xl" : "text-2xl"}
            `}
          >
            {member.name}
          </span>
          <span
            className={`font-medium text-center text-white [text-wrap:balance] ${featured ? "text-xl" : "text-lg"}`}
          >
            {member.role}
          </span>
          <SocialLinks member={member} />
        </div>
      </motion.div>
    </motion.div>
  );
};
