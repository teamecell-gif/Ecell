"use client";

import { motion } from "framer-motion";
import { titleVariants } from "./animations";

export const SectionTitle = ({ title }: { title: string }) => (
  <motion.div
    className="flex flex-col items-center justify-center text-center"
    variants={titleVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="w-[1px] h-12 bg-white/30 mb-4" />
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase">
      {title}
    </h2>
  </motion.div>
);
