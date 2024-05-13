import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaFigma, FaReact, FaWordpressSimple } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ratemyskwelaImg from "@/public/ratemyskwela.png";
import mycontentpalImg from "@/public/MCP.png";
import seoforhireImg from "@/public/SFH.png";
import linkcityImg from "@/public/linkcity.png";
import ecohappyImg from "@/public/ecohappy.png";
import startlivingImg from "@/public/startliving.png";
import strathornfarmImg from "@/public/strathornfarm.png";
import best4yourhomeImg from "@/public/best4yourhome.png";
import holistichealthhqImg from "@/public/holistichealth.png";

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
    title: "Computer Science Degree",
    location: "Cebu, PH",
    description:
      "Despite being a student, I've been actively engaged in the world of development, honing my skills and gaining practical experience. Now, I'm eagerly seeking a full-time opportunity to leverage my expertise as a web developer and contribute meaningfully to innovative projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Administrative Assistant",
    location: "Remote",
    description:
      "As an administrative assistant for a year, I managed process documentation and handled general admin tasks. It was during this time when out of the blue, due to the reason that I was a computer science student, my boss asked me to build a site using a simple site builder. Where I found myself learning the basics. This experience kickstarted my interest in the field and led me to pursue it further.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I was never to become a full-time web developer, but I was offered a position as a front-end developer. I worked on a variety of projects, gaining experience with HTML, CSS, Javascript, and PHP. I also learned how to work with APIs and integrate them into web applications. This experience solidified my decision to pursue web development as a career. I took Figma designs and turned them into fully functional websites.",
    icon: React.createElement(FaWordpressSimple),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "RateMySkwela",
    description:
      "This was a personal project of mine when I was in college. It's a platform where students can rate their university. It has features like user authentication, rating, and commenting.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Redux", "Firebase"],
    imageUrl: ratemyskwelaImg,
    url: "https://ratemyskwela.onrender.com/",
  },
  {
    title: "My Content Pal",
    description:
      "MyContentPal is an SEO content writing agency that produces high-quality content that's optimised for SEO. I was responsible for the implementation of design and development of the website.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: mycontentpalImg,
    url: "https://mycontentpal.com",
  },
  {
    title: "Link City",
    description:
      "Link City is a link building company that helps businesses build high-quality backlinks. I was responsible for the implementation of design and development of the website. Currently, the site is still in development, and the site that's live is not of mine.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: linkcityImg,
    url: "https://link-city.co",
  },
  {
    title: "SEO For Hire",
    description:
      "SEO For Hire is a global leader in SEO recruitment. They help companies build expert SEO teams. I was responsible for the implementation of design and development of the website.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: seoforhireImg,
    url: "https://seoforhire.co/",
  },
  {
    title: "Eco Happy",
    description:
      "Eco Happy is a boiler installer company. They help homeowners install boilers that are energy-efficient. I was responsible for the implementation of design and development of the website.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: ecohappyImg,
    url: "https://ecohappy.co.uk",
  },
  {
    title: "Strathorn Farm Stables",
    description:
      "Strathorn Farm Stables is an animal blog about horses based in UK. They post content about horses and how to take care of them. I was responsible for the implementation of design and development of the website.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: strathornfarmImg,
    url: "https://strathornfarm.co.uk",
  },
  {
    title: "Start Living",
    description:
      "Start Living is a travel blog based in Africa. They help people find the best places to visit in Africa. I was responsible for the implementation of design and development of the website.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: startlivingImg,
    url: "https://startlivingafrica.co",
  },
  {
    title: "Best4YourHome",
    description:
      "This was actually a project that I did for a client because they wanted to test my skills before hiring me. It's a blog about home improvement. This was a full redesign of everything including graphics, logo, etc. I was responsible for the creation of the design and development of the website.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: best4yourhomeImg,
    url: "https://best4yourhome.com",
  },
  {
    title: "Holistic Health Headquarters",
    description:
      "This is a blog about holistic health. They post content about holistic health and how to take care of your body. I was responsible for the creation of web design, graphics, logo, and development of the website.",
    tags: ["HTML", "CSS", "PHP", "Javascript", "Wordpress", "Figma"],
    imageUrl: holistichealthhqImg,
    url: "https://holistichealthhq.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "WordPress",
  "Firebase",
] as const;
