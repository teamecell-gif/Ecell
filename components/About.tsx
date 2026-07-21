"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import SectionBackground from "./ui/SectionBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section id="about" className="bg-[#0C0C0C] py-24 md:py-32">
      <SectionBackground variant="particles">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center">
          <SectionHeader category="Who We Are" title="About Us" className="mb-12" />

          {/* Editorial Body Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-full max-w-5xl"
          >
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-relaxed md:leading-[1.8] font-light text-center tracking-wide">
              <strong className="text-ecell font-semibold not-italic">E-Cell VNIT</strong>{" "}
              is an entrepreneurship cell based at Visvesvaraya National Institute of Technology that mentors and guides startups. We foster a community of entrepreneurs through programs, personalized mentorship, funding opportunities, and a robust network to transform student ideas into successful ventures.
            </p>
          </motion.div>
        </div>
      </SectionBackground>
    </section>
  );
};

export default About;
