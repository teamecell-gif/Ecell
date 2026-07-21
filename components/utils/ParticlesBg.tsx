"use client";

import { useState, useEffect } from "react";
import Particles from "../Particles";

export const ParticlesBg = ({ className = "" }: { className?: string }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Pause WebGL particle rendering on mobile screens to save GPU & battery
  if (isMobile) {
    return null;
  }

  return (
    <div className={`hidden md:block absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <Particles
        particleCount={100}
        particleSpread={10}
        speed={0.4}
        particleColors={["#3B82F6"]}
        moveParticlesOnHover
        particleHoverFactor={1}
        alphaParticles
        particleBaseSize={100}
        sizeRandomness={1}
        cameraDistance={20}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesBg;
