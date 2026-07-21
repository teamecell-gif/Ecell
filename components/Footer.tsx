import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteConfig";
import ecellLogoWhite from "../public/assets/ecell-white-img.webp";

/* ─── Social icon data ────────────────────────────────────────── */
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ecellvnit/",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://m.facebook.com/vnitecell/",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/ecell_vnit",
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ─── Link data ───────────────────────────────────────────────── */
const initiatives = [
  { label: "Startup Conclave", href: "https://startupconclave.ecellvnit.org/" },
  { label: "Startup Expo", href: "https://expo.ecellvnit.org/" },
  { label: "NEO", href: "https://neo.ecellvnit.org/" },
  { label: "Launchpad", href: "/launchpad" },
  { label: "IPL", href: "https://ipl.ecellvnit.org/" },
];

const moreLinks = [
  { label: "Jugaad", href: "https://jugaad.ecellvnit.org/" },
  { label: "CEO", href: "https://ceo.ecellvnit.org/" },
  { label: "Wallstreet", href: "https://wallstreet.ecellvnit.org/" },
  { label: "Sponsors", href: "/sponsors" },
];

/* ─── Reusable link column ────────────────────────────────────── */
const LinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
      {title}
    </h3>
    <nav className="flex flex-col gap-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-base text-white/70 transition-colors duration-200 hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
);

/* ─── Footer Component ────────────────────────────────────────── */
const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0A0A0A] text-white">

      {/* ── Main Footer Sections ── */}
      <div className="px-6 py-12 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 divide-y divide-white/10 lg:divide-y-0 lg:grid lg:grid-cols-5 lg:gap-12">

          {/* Column 1: Logo + Social */}
          <div className="flex flex-col gap-5 pb-4 lg:pb-0">
            <Link href="/">
              <Image
                src={ecellLogoWhite}
                width={180}
                height={160}
                alt="E-Cell VNIT Logo"
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              The Entrepreneurship Cell, VNIT Nagpur
            </p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/40 transition-colors duration-300 hover:text-ecell"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Consortium (standalone highlighted) */}
          <div className="pt-8 lg:pt-0 flex flex-col gap-3">
            <Link
              href="https://consortium.ecellvnit.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2"
            >
              <span className="text-xl font-bold text-ecell transition-colors duration-300 group-hover:text-ecell-light">
                Consortium&apos;25
              </span>
              <span className="text-sm text-white/50 leading-relaxed max-w-xs">
                Annual Entrepreneurship Summit & Management Fest of VNIT, Nagpur
              </span>
            </Link>
          </div>

          {/* Column 3: Initiatives */}
          <div className="pt-8 lg:pt-0">
            <LinkColumn title="Initiatives" links={initiatives} />
          </div>

          {/* Column 4: More */}
          <div className="pt-8 lg:pt-0">
            <LinkColumn title="More" links={moreLinks} />
          </div>

          {/* Column 5: Contact */}
          <div className="pt-8 lg:pt-0 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <svg className="h-5 w-5 mt-0.5 shrink-0 text-ecell" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-sm text-white/60 leading-relaxed">
                  E-Cell Office, 1st Floor VNIT Canteen, South Ambazari Road, Nagpur — 440010
                </p>
              </div>
              {/* Email */}
              <a
                href={SITE_CONFIG.contacts.corporateAffairs}
                className="flex items-start gap-2.5 text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                <svg className="h-5 w-5 mt-0.5 shrink-0 text-ecell" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="break-all">corporateaffairs@ecellvnit.co.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="px-8 py-5 md:px-12 lg:px-16 flex items-center justify-center">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()}{" "}
            <span className="text-ecell">E-Cell VNIT</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
