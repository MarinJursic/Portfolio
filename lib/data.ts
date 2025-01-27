import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import honeycomb from "../public/honeycomb.png";
import dashboard from "../public/dashboard.png";
import siteboost  from "../public/siteboost.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "COMPUTER TECHNICIAN",
    location: "Zadar, Croatia",
    description:
      "Learned about hardware and software of computer systems and specialized in software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    location: "Zagreb, Croatia",
    description:
      "I am graduating with a bachelor's degree in computer science. I learned about algorithms, data structures, databases, and software development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelance",
    description:
      "Worked for various client on different projects for 2 years. Developed web apps, websites and landing pages using a wide range of technologies, each for their specific needs.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Honeycomb",
    description:
      "Software as a Service for managing and tracking tasks. I was the full-stack developer. It has features like user authentication, task management and analytics.",
    tags: ["Next.js", "Firebase", "Redux"],
    imageUrl: honeycomb,
  },
  {
    title: "EBankc",
    description:
      "DeFi banking app for managing your finances. Includes responsive design, multiple pages, and user authentication.",
    tags: ["React", "TypeScript", "Next.js", "Redux", "Framer Motion"],
    imageUrl: dashboard,
  },
  {
    title: "SiteBoost",
    description:
      "Web app for managing and tracking website performance. I was the full-stack developer. It has features like user authentication, payment system, dashboard and many more.",
    tags: ["React", "Next.js", "Redux", "Tailwind", "Framer Motion"],
    imageUrl: siteboost,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
  "Figma"
] as const;
