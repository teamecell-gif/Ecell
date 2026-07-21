export interface SocialLink {
  label: string;
  href: string;
  iconName: "linkedin" | "instagram" | "youtube" | "x";
}

export interface ContactInfo {
  corporateAffairs: string;
  publicRelations: string;
}

export const SITE_CONFIG = {
  name: "E-Cell VNIT",
  tagline: "Guiding Founders from Zero to Zenith through Innovation, Mentorship, and Enterprise.",
  contacts: {
    corporateAffairs: "mailto:corporateaffairs@ecellvnit.co.in",
    publicRelations: "mailto:pr@ecellvnit.co.in",
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/ecellvnit",
      iconName: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ecellvnit/",
      iconName: "instagram",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCG07_V9sWq_F2n__w-66b9g",
      iconName: "youtube",
    },
    {
      label: "X",
      href: "https://x.com/ecell_vnit",
      iconName: "x",
    },
  ] as SocialLink[],
};
