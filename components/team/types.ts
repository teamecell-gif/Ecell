import type { StaticImageData } from "next/image";

/** Represents a core committee member with full contact information. */
export interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
  linkedin: string;
  email: string;
  phone: string;
}

/** Represents a faculty advisor (no social links needed). */
export interface FacultyMember {
  name: string;
  role: string;
  image: StaticImageData;
}
