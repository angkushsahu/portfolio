import { SiNestjs, SiRadixui, SiTailwindcss, SiTrpc, SiTypescript } from "react-icons/si";
import { FaJava, FaNodeJs, FaReact, FaRust, FaSass } from "react-icons/fa6";
import { SiExpress, SiJavascript, SiMongodb, SiMui } from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export const languages = [
   { Icon: TbBrandCpp, tooltip: "C++" },
   { Icon: FaRust, tooltip: "Rust" },
   { Icon: FaJava, tooltip: "Java" },
   { Icon: SiJavascript, tooltip: "Javascript" },
   { Icon: SiTypescript, tooltip: "Typescript" },
   { Icon: FaReact, tooltip: "React.js" },
   { Icon: TbBrandNextjs, tooltip: "Next.js" },
   { Icon: SiRadixui, tooltip: "Radix UI" },
   { Icon: SiMui, tooltip: "Material UI" },
   { Icon: SiTailwindcss, tooltip: "Tailwind CSS" },
   { Icon: FaSass, tooltip: "SASS" },
   { Icon: FaNodeJs, tooltip: "Node.js" },
   { Icon: SiExpress, tooltip: "Express.js" },
   { Icon: SiNestjs, tooltip: "Nest.js" },
   { Icon: SiTrpc, tooltip: "TRPC" },
   { Icon: BiLogoPostgresql, tooltip: "PostgreSQL" },
   { Icon: SiMongodb, tooltip: "Mongo DB" },
];

export const experienceArr = [
   {
      role: "Backend Developer",
      companyLogo: "https://res.cloudinary.com/dvhucdquc/image/upload/v1713349801/companies/jx0dpdqj9y4jes8pfib1.webp",
      companyName: "Saurabhi Media",
      duration: "Feb 2024 - May 2024",
      location: "Remote",
      jobType: "Internship",
   },
   {
      role: "Full Stack Developer",
      companyLogo: "https://res.cloudinary.com/dvhucdquc/image/upload/v1713349801/companies/ng4fvluwoscgiuifdzzw.webp",
      companyName: "Feetwings",
      duration: "Apr 2022 - Jun 2022",
      location: "Remote",
      jobType: "Internship",
   },
];

export const educationArr = [
   {
      institute: "Jorhat Engineering College",
      course: "Bachelor of Technology",
      duration: "2020 - 2024",
   },
   { institute: "Pragya Academy", course: "Higher Secondary", duration: "2018 - 2020" },
   { institute: "Spring Dale High School", course: "High School", duration: "2006 - 2018" },
];
