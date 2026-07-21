"use client";

import ParticlesBg from "../utils/ParticlesBg";

interface SectionBackgroundProps {
  variant?: "particles" | "none";
  className?: string;
  children?: React.ReactNode;
}

export const SectionBackground = ({
  variant = "particles",
  className = "",
  children,
}: SectionBackgroundProps) => {
  if (variant === "none") return <>{children}</>;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {variant === "particles" && <ParticlesBg />}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;
