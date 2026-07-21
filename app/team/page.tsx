"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { GradientDivider } from "@/components/team/Icons";
import {
  SectionTitle,
  MemberCard,
  FacultyCard,
  faculty,
  leadership,
  coreMembers,
  containerVariants,
} from "@/components/team";

// ─── Page Component ────────────────────────────────────────────────
const Team = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-[#0C0C0C] pt-32 pb-36">
        <div className="w-full h-full flex justify-center overflow-hidden">
          <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
            {/* ── Page Title ── */}
            <SectionHeader category="The People Behind E-Cell" title="Our Team" />

            {/* ── Faculty Section ── */}
            <motion.section
              className="grid grid-cols-1 md:grid-cols-3 justify-evenly items-center pt-20 gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              aria-label="Faculty advisors"
            >
              <div className="md:col-span-3 lg:col-span-3 justify-center items-center flex flex-col gap-10">
                <SectionTitle title="Faculty" />
              </div>

              {faculty.map((member, index) => (
                <FacultyCard
                  key={member.name}
                  member={member}
                  priority={index === 0}
                />
              ))}
            </motion.section>

            {/* ── Core Committee Section ── */}
            <section className="pt-36 px-2" aria-label="Core committee members">
              <SectionTitle title="Core Committee" />

              {/* Leadership Row — President & VP (featured, larger cards) */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto mt-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {leadership.map((member) => (
                  <MemberCard key={member.name} member={member} featured />
                ))}
              </motion.div>

              {/* Remaining Core Members */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 max-w-xs md:max-w-5xl mx-auto mt-16">
                {coreMembers.map((member) => (
                  <MemberCard key={member.name} member={member} animateIndependent />
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="pt-10 bg-black">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Team;
