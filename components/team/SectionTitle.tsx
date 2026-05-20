"use client";

import { motion } from "framer-motion";
import { titleVariants } from "./animations";
import { GradientDivider } from "./Icons";

export const SectionTitle = ({ title }: { title: string }) => (
  <motion.div
    className="flex flex-col gap-3 items-center justify-center text-4xl xl:text-5xl font-semibold"
    variants={titleVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">
      {title}
    </span>
    <GradientDivider />
  </motion.div>
);
