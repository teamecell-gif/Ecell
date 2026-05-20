"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── Social link data ──────────────────────────────────────────── */
const socials = [
  {
    label: "Facebook",
    href: "https://m.facebook.com/vnitecell/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ecellvnit/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
        />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/ecell_vnit",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

/* ─── Framer Motion variants ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const socialFade = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 1.2 + i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

/* ─── Component ─────────────────────────────────────────────────── */
const Landing = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/assets/andywang.webp')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* ── Left Sidebar: Social Icons ── */}
      <div className="hidden md:flex absolute left-6 lg:left-10 top-0 bottom-0 z-20 flex-col items-center justify-center">

        <div className="flex flex-col items-center gap-6 py-8">
          {socials.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={socialFade}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="block text-white/80 hover:text-[#0298F9] transition-colors duration-300 [&_svg]:w-7 [&_svg]:h-7"
              >
                {s.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Center Content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">

        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase leading-[0.95] tracking-tight"
        >
          <span className="block text-white drop-shadow-lg">The</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0298F9] to-[#086BEA] drop-shadow-lg py-2">
            Entrepreneurship
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#086BEA] to-[#0298F9] drop-shadow-lg">
            Cell
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 md:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 tracking-[0.2em] uppercase drop-shadow-md"
        >
          VNIT Nagpur
        </motion.h2>

        {/* Explore Button */}
        <motion.button
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          onClick={handleClickScroll}
          className="mt-10 md:mt-14 text-sm sm:text-base font-bold text-[#0298F9] bg-transparent border-2 border-[#0298F9] px-8 py-3 uppercase tracking-widest hover:bg-[#0298F9] hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Explore
        </motion.button>
      </div>

      {/* ── Right Side Scroll Indicator ── */}
      <motion.div
        className="hidden md:flex absolute right-6 lg:right-10 bottom-10 z-20 flex-col items-center gap-3 cursor-pointer text-white hover:text-[#0298F9] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={handleClickScroll}
      >
        <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-2.5 bg-current rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* ── Mobile Social Links (bottom bar) ── */}
      <div className="md:hidden absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-6">
        {socials.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-white/70 hover:text-[#0298F9] transition-colors"
          >
            {s.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Landing;
