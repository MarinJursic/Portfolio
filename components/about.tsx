"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      My journey into technology began with a <span className="font-medium">fascination for building and creating things</span> that could make a difference. This curiosity led me to pursue a foundation in programming as a Computer Technician and, later, enroll in a <span className="font-medium"> Bachelor of Computer Science</span>  program to deepen my understanding of the field.

Along the way, I ventured into <span className="font-medium">freelancing</span>, where I turned my passion into a career. I’ve worked on a variety of projects, from building subscription platforms to designing responsive web applications and creating seamless user experiences. These experiences taught me the value of combining creativity with technical expertise to deliver solutions that are both functional and impactful.


      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy working out, watching movies, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">AI systems</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
