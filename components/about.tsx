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
        While studying for my degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I bought a course on Udemy and
        learned <span className="font-medium">web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. The first web
        development stack I tried was{" "}
        <span className="font-medium">
          React, Express, Node.js, and MongoDB
        </span>
        <span> but the crazy part was the job I ended up with was</span>
        <span className="font-medium"> Wordpress</span>. I am also familiar with
        TypeScript and I am always looking to learn new technologies. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          philosophy and general parenting stuff because I'm soon to be a father
          of a beautiful girl
        </span>
        . I'm also a singer for a band called{" "}
        <span className="font-medium">GirlKissers</span>.
      </p>
    </motion.section>
  );
}
