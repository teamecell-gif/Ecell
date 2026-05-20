"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ecellLogo from "../public/assets/ecell-logo.png";

const navigation = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Initiatives", href: "/#initiatives" },
  { name: "Events", href: "/#events" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/#contact" },
];

const NAV_SCROLL_THRESHOLD = 150;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowSolidNav = window.scrollY > NAV_SCROLL_THRESHOLD;
      setScrolled((current) => (
        current === shouldShowSolidNav ? current : shouldShowSolidNav
      ));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-20 py-4 lg:py-5 transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-black shadow-lg" : "bg-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <a href="https://www.ecellvnit.org/">
          <Image
            src={ecellLogo}
            alt="E-Cell VNIT Logo"
            width={100}
            height={100}
            priority
            className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain transition-[filter] duration-300 ${
              scrolled ? "drop-shadow-none" : "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            }`}
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs lg:text-sm uppercase tracking-widest text-white/80 hover:text-[#0298F9] transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="fixed top-20 left-0 right-0 z-50 bg-black/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-5 py-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest text-white/80 hover:text-[#0298F9] transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
