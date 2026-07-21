"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  category: string;
  title: string;
  align?: "center" | "left";
  theme?: "dark" | "light";
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const SectionHeader = ({
  category,
  title,
  align = "center",
  theme = "dark",
  className = "",
}: SectionHeaderProps) => {
  const isLight = theme === "light";
  const alignClasses =
    align === "center"
      ? "flex flex-col items-center justify-center text-center"
      : "flex flex-col items-start justify-start text-left";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`${alignClasses} ${className}`}
    >
      <div
        className={`w-[1px] h-14 mb-5 ${
          isLight ? "bg-black/20" : "bg-white/30"
        }`}
      />
      <span
        className={`text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-3 ${
          isLight ? "text-ecell-deep" : "text-ecell"
        }`}
      >
        {category}
      </span>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
