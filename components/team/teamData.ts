import type { TeamMember, FacultyMember } from "./types";

// ─── Faculty photos ────────────────────────────────────────────────
import agasti_sir from "../../public/assets/team/agasti_sir.webp";
import chayan from "../../public/assets/team/py.webp";
import khatri from "../../public/assets/team/khatri.webp";

// ─── Core Committee photos ─────────────────────────────────────────
import prashant from "../../public/assets/team/PrashantNew.webp";
import anushkaK from "../../public/assets/team/AnushkaK.webp";
import deveshMishra from "../../public/assets/team/DeveshMishra.webp";
import gokulTV from "../../public/assets/team/GokulTV.webp";
import aryaKhadtar from "../../public/assets/team/AryaKhadtar.webp";
import aryanGarg from "../../public/assets/team/AryanGarg.webp";
import pragyaAgarwal from "../../public/assets/team/PragyaAgarwal.webp";
import vidhiRai from "../../public/assets/team/VidhiRai.webp";
import ishikaSingh from "../../public/assets/team/IshikaSingh.webp";
import junedTamboli from "../../public/assets/team/JunedTamboli.webp";
import jineshSriSabari from "../../public/assets/team/JineshSriSabari.webp";
import shaileshTiwari from "../../public/assets/team/ShaileshTiwari.webp";
import samithReddy from "../../public/assets/team/SamithReddy.webp";
import placeholder from "../../public/assets/team/placeholder.svg";
import sudiksha from "../../public/assets/team/Sudiksha.webp";
import sanket from "../../public/assets/team/Sanket.webp";
import shivansh from "../../public/assets/team/Shivansh.webp";

// ─── Faculty Data ──────────────────────────────────────────────────
export const faculty: FacultyMember[] = [
  { name: "Dr. Amrut Agasti", role: "Professor Incharge", image: agasti_sir },
  { name: "Dr. Piyush P. Wanjari\u200B", role: "Professor Incharge", image: chayan },
  { name: "Dr. Ashish P. Khatri", role: "Professor Incharge", image: khatri },
];

// ─── Leadership (President & VP) — rendered in featured row ────────
export const leadership: TeamMember[] = [
  {
    name: "Prashant T Labde",
    role: "President",
    image: prashant,
    linkedin: "https://www.linkedin.com/in/prashanttlabde",
    email: "Prashantlabade108@gmail.com",
    phone: "7499995479",
  },
  {
    name: "Anushka Kumari",
    role: "Vice President",
    image: anushkaK,
    linkedin: "https://www.linkedin.com/in/anushkak954",
    email: "anushkak0954@gmail.com",
    phone: "8779165100",
  },
];

// ─── Core Committee Members ────────────────────────────────────────
export const coreMembers: TeamMember[] = [
  {
    name: "Devesh Mishra",
    role: "Treasurer",
    image: deveshMishra,
    linkedin: "https://www.linkedin.com/in/devesh-mishra-6b2352357/",
    email: "deveshmishra2811@gmail.com",
    phone: "8928133816",
  },
  {
    name: "Gokul T V",
    role: "Head of Operations & Planning",
    image: gokulTV,
    linkedin: "https://www.linkedin.com/in/gokultvv",
    email: "gokultv03@gmail.com",
    phone: "8590203650",
  },
  {
    name: "Arya Khadtar",
    role: "Head of Operations & Planning",
    image: aryaKhadtar,
    linkedin: "https://www.linkedin.com/in/arya-khadtar",
    email: "khadtararya@gmail.com",
    phone: "9372219798",
  },
  {
    name: "Sudiksha Challa",
    role: "Head of Operations & Planning",
    image: sudiksha,
    linkedin: "https://www.linkedin.com/in/sudiksha-challa-99846b324/",
    email: "sudikshachalla@gmail.com",
    phone: "9182558603",
  },
  {
    name: "Aryan Garg",
    role: "Head of Corporate Communication",
    image: aryanGarg,
    linkedin: "https://www.linkedin.com/in/aryan-garg-a5b193369",
    email: "aryangarg04042006@gmail.com",
    phone: "8502080654",
    imageClass: "object-top",
  },
  {
    name: "Pragya Agarwal",
    role: "Head of Corporate Communication",
    image: pragyaAgarwal,
    linkedin: "https://www.linkedin.com/in/pragya-agarwal-6101a2378/",
    email: "pragyaagarwal874@gmail.com",
    phone: "8955411581",
  },
  {
    name: "Vidhi Rai",
    role: "Head of Corporate Communication",
    image: vidhiRai,
    linkedin: "https://www.linkedin.com/in/vidhi-rai-a98544379",
    email: "raiv9489@gmail.com",
    phone: "9356128643",
  },
  {
    name: "Ishika Singh",
    role: "Head of Public Relations",
    image: ishikaSingh,
    linkedin: "https://www.linkedin.com/in/ishika-singh-73a41330b",
    email: "ishikasingh10323@gmail.com",
    phone: "9780390534",
    imageClass: "object-center",
  },
  {
    name: "Sanket Pujari",
    role: "Head of Public Relations",
    image: sanket,
    linkedin: "https://www.linkedin.com/in/sanket-pujari-6b94a2334",
    email: "sanketpujari205@gmail.com",
    phone: "9766790411",
  },
  {
    name: "Juned Tamboli",
    role: "Head of Brand Marketing",
    image: junedTamboli,
    linkedin: "",
    email: "junedrtamboli1802@gmail.com",
    phone: "9322383986",
  },
  {
    name: "Jinesh Sri Sabari N.H",
    role: "Head of Brand Marketing",
    image: jineshSriSabari,
    linkedin: "https://www.linkedin.com/in/jinesh-sri-sabari-2163583b7",
    email: "n.h.jinesh18@gmail.com",
    phone: "7205051805",
  },
  {
    name: "Shailesh Tiwari",
    role: "Head of Product",
    image: shaileshTiwari,
    linkedin: "https://linkedin.com/in/shailesh-tiwari-607190314",
    email: "shailesh9565824542@gmail.com",
    phone: "9792509438",
  },
  {
    name: "Shivansh Tiwari",
    role: "Head of Product",
    image: shivansh,
    linkedin: "https://www.linkedin.com/in/shivansh-tiwari-68ab15235",
    email: "shivansht2018@gmail.com",
    phone: "8468968294",
    imageClass: "object-top",
  },
  {
    name: "Samith Reddy Gurijala",
    role: "Head of Technical Affairs",
    image: samithReddy,
    linkedin: "https://www.linkedin.com/in/samith-reddy-gurijala-9b5487338/",
    email: "samithreddyg@gmail.com",
    phone: "7989932364",
  },
];
