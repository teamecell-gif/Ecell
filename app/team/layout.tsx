import type { Metadata } from "next";
import { faculty, leadership, coreMembers } from "@/components/team/teamData";

const allNames = [
  ...faculty.map((f) => f.name),
  ...leadership.map((l) => l.name),
  ...coreMembers.map((c) => c.name),
];

export const metadata: Metadata = {
  title: "Our Team | E-Cell VNIT Nagpur",
  description:
    "Meet the core committee of the Entrepreneurship Cell, VNIT Nagpur 2026-27. Our team of passionate student leaders drives innovation, entrepreneurship, and startup culture on campus.",
  keywords: [
    "E-Cell VNIT Team",
    "E-Cell VNIT Core Committee",
    "VNIT Entrepreneurship Cell",
    "E-Cell VNIT Nagpur",
    ...allNames,
  ],
  openGraph: {
    title: "Our Team | E-Cell VNIT Nagpur",
    description:
      "Meet the core committee driving entrepreneurship at VNIT Nagpur.",
    type: "website",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "E-Cell VNIT Nagpur",
    url: "https://www.ecellvnit.org",
    member: [
      ...leadership.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        worksFor: {
          "@type": "Organization",
          name: "E-Cell VNIT Nagpur",
        },
      })),
      ...coreMembers.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        worksFor: {
          "@type": "Organization",
          name: "E-Cell VNIT Nagpur",
        },
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
