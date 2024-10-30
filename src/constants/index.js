import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  starbucks,
  imageaipro,
  myportfolio,
  chatapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Poster Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We were struggling with our project's design, but Vinay's input and execution made it not only functional but stunning!",
    name: "Darshan SN",
    designation: "Project Partner",
    company: "ImageAIPro",
    image:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
  },
];

const projects = [
  {
    name: "ImageAIPro",
    description:
      "A centralized AI prompt marketplace where developers, researchers, and businesses can buy and sell prompts, saving time and resources in generating AI images and illustrations.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
    ],
    image: imageaipro,
    source_code_link: "http://imageaipro-darshan-s-ns-projects.vercel.app",
  },
  {
    name: "Chat App",
    description:
      "A real-time chat app built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for live communication, providing seamless real-time chat functionality.",
    tags: [
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/VinayHomkar/CHAT-APP",
  },
  {
    name: "My Portfolio",
    description:
      "A responsive portfolio is a personal website designed to showcase an individual's skills, projects, and professional experience, optimized for various devices and screen sizes.",
    tags: [
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.Js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: myportfolio,
    source_code_link: "https://github.com/VinayHomkar/MyPortfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
