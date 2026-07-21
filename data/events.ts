export type EventStatus = "active" | "past" | "comingSoon";

export interface EventItem {
  id: string;
  title: string;
  status: EventStatus;
  image: string;
  href: string;
  external: boolean;
  tagline?: string;
  deadline?: string;
  prizePool?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "chapters-nagpur",
    title: "Chapters Nagpur - IIT Bombay",
    status: "active",
    image: "/assets/events/chapters.png",
    href: "https://www.ecell.in/chapters/register",
    external: true,
    tagline: "E-Summit Chapters Nagpur is a regional entrepreneurship chapter hosted by E-Cell VNIT Nagpur in association with E-Cell IIT Bombay. Featuring an Investors Conclave, BMC Filling Workshop, networking rounds, and the Pitch in a Minute Case Competition. The top 2 startups from VNIT Nagpur win direct entry into the Zonal round of Eureka!.",
  },
  {
    id: "skilhouette",
    title: "Skilhouette",
    status: "comingSoon",
    image: "/assets/icon.webp",
    href: "https://skilhouette.ecellvnit.org/",
    external: true,
    tagline: "Hands-on skill building initiative and interactive learning series empowering young innovators.",
  },
  {
    id: "flagship",
    title: "Flagship",
    status: "comingSoon",
    image: "/assets/flagship.webp",
    href: "https://flagship.ecellvnit.org/",
    external: true,
    tagline: "E-Cell VNIT's premier entrepreneurship summit featuring startup competitions, workshops, and keynote sessions.",
    deadline: "August 15, 2026",
    prizePool: "₹1,00,000",
  },
  {
    id: "consortium",
    title: "Consortium",
    status: "comingSoon",
    image: "/assets/events/consortium.png",
    href: "https://consortium.ecellvnit.org/",
    external: true,
  },
];
