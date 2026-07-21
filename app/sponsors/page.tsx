"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ecellLogo from "../../public/assets/ecell-logo.webp";

import adobe from "../../public/assets/sponsors/adobe.webp";
import air_india from "../../public/assets/sponsors/air_india.webp";
import akudo from "../../public/assets/sponsors/akudo.webp";
import astrail from "../../public/assets/sponsors/astrail.webp";
import bsnl from "../../public/assets/sponsors/bsnl.webp";
import canara from "../../public/assets/sponsors/canara.webp";
import ccd from "../../public/assets/sponsors/ccd.webp";
import central from "../../public/assets/sponsors/central.webp";
import coal_india from "../../public/assets/sponsors/coal_india.webp";
import coco_cola from "../../public/assets/sponsors/coco_cola.webp";
import dhl from "../../public/assets/sponsors/dhl.webp";
import hp from "../../public/assets/sponsors/hp.webp";
import iball from "../../public/assets/sponsors/iball.webp";
import insurance from "../../public/assets/sponsors/insurance.webp";
import itc from "../../public/assets/sponsors/itc.webp";
import kawasaki from "../../public/assets/sponsors/kawasaki.webp";
import lenskart from "../../public/assets/sponsors/lenskart.webp";
import moil from "../../public/assets/sponsors/moil.webp";
import ntpc from "../../public/assets/sponsors/ntpc.webp";
import ola from "../../public/assets/sponsors/ola.webp";
import oyo from "../../public/assets/sponsors/oyo.webp";
import radisson from "../../public/assets/sponsors/radisson.webp";
import rc from "../../public/assets/sponsors/rc.webp";
import sbi from "../../public/assets/sponsors/sbi.webp";
import sidbi from "../../public/assets/sponsors/sidbi.webp";
import uber from "../../public/assets/sponsors/uber.webp";
import unacademy from "../../public/assets/sponsors/unacademy.webp";
import zebronics from "../../public/assets/sponsors/zebronics.webp";

const sponsorGroups = [
    {
        title: "Title Sponsors",
        sponsors: [
            { src: zebronics, alt: "Zebronics" },
            { src: unacademy, alt: "Unacademy" },
            { src: akudo, alt: "Akudo" },
        ],
    },
    {
        title: "Gold Sponsors",
        sponsors: [
            { src: kawasaki, alt: "Kawasaki" },
            { src: coco_cola, alt: "Coca Cola" },
            { src: radisson, alt: "Radisson Blu" },
        ],
    },
    {
        title: "Silver Sponsors",
        sponsors: [
            { src: adobe, alt: "Adobe", width: 120 },
            { src: air_india, alt: "Air India" },
            { src: central, alt: "Central" },
        ],
    },
    {
        title: "Bronze Sponsors",
        sponsors: [
            { src: ntpc, alt: "NTPC" },
            { src: coal_india, alt: "Coal India" },
            { src: moil, alt: "MOIL" },
            { src: sidbi, alt: "SIDBI" },
        ],
    },
    {
        title: "Banking Partners",
        sponsors: [
            { src: canara, alt: "Canara Bank", width: 1000 },
            { src: sbi, alt: "SBI" },
            { src: bsnl, alt: "BSNL" },
            { src: insurance, alt: "National Insurance" },
        ],
    },
    {
        title: "Other Partners",
        sponsors: [
            { src: oyo, alt: "OYO" },
            { src: lenskart, alt: "Lenskart" },
            { src: itc, alt: "ITC" },
            { src: ola, alt: "Ola" },
            { src: hp, alt: "HP", width: 200 },
            { src: uber, alt: "Uber", width: 350 },
            { src: iball, alt: "iBall", width: 200 },
            { src: ccd, alt: "CCD", width: 200 },
            { src: dhl, alt: "DHL", width: 400 },
            { src: astrail, alt: "Astrail" },
            { src: rc, alt: "Radio City" },
        ],
    },
];
const navigation = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Initiatives", href: "/#initiatives" },
    { name: "Events", href: "/#events" },
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact", href: "mailto:corporateaffairs@ecellvnit.co.in" },
];

const Sponsors = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Solid black navbar for white page */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-20 py-3 lg:py-4 bg-black">
                <a href="https://www.ecellvnit.org/">
                    <Image
                        src={ecellLogo}
                        alt="E-Cell VNIT Logo"
                        width={100}
                        height={100}
                        priority
                        className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                </a>
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xs lg:text-sm uppercase tracking-widest text-white/80 hover:text-ecell transition-colors duration-300 font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Top padding for fixed navbar */}
            <div className="pt-24 md:pt-28 pb-16 px-6 md:px-16 lg:px-24">
                {/* Page Title */}
                <SectionHeader category="Backing Our Vision" title="Our Sponsors" theme="light" className="mb-16" />

                {/* Sponsor Groups */}
                <div className="max-w-7xl mx-auto space-y-20">
                    {sponsorGroups.map((group) => (
                        <div key={group.title}>
                            {/* Group Title */}
                            <h2 className="text-center text-lg md:text-xl uppercase tracking-[0.3em] text-gray-400 font-medium mb-10">
                                {group.title}
                            </h2>

                            {/* Sponsor Logos */}
                            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-16">
                                {group.sponsors.map((sponsor) => (
                                    <div
                                        key={sponsor.alt}
                                        className="flex justify-center items-center bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-gray-100 transition-colors duration-300 w-[160px] h-[120px] md:w-[220px] md:h-[140px]"
                                    >
                                        <Image
                                            src={sponsor.src}
                                            alt={sponsor.alt}
                                            width={sponsor.width || undefined}
                                            className="max-h-20 md:max-h-24 w-auto object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-10 bg-black">
                <Footer />
            </div>
        </div>
    );
}

export default Sponsors;
