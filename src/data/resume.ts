import { FaGlobe, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const data = {
  name: "John Doe",
  initial: "JD",
  url: "https://johndoe.dev",
  location: "San Francisco, CA",
  keywords: "Full-stack Developer, React, Node.js, DevOps",
  description:
    "Full-stack developer with expertise in web development, cloud services, and scalable applications.",
  summary:
    "Experienced developer with 7+ years in building high-performance web applications, specializing in React and Node.js. Passionate about clean code, best practices, and delivering efficient solutions.",
  avatar: {
    url: "img/avatar.png",
    alt: "John Doe",
  },
  contact: {
    email: "john.doe@example.com",
    tel: "+1-123-456-7890",
    sms: "+1-123-456-7890",
    social: {
      GitHub: {
        url: "https://github.com/",
        icon: FaGithub,
        className: "text-black text-2xl",
      },
      LinkedIn: {
        url: "https://linkedin.com/in/",
        icon: FaLinkedin,
        className: "text-[#0A66C2] text-2xl",
      },
      Facebook: {
        url: "https://facebook.com/",
        icon: FaFacebook,
        className: "text-[#1877F2] text-2xl",
      },
      Twitter: {
        url: "https://twitter.com/",
        icon: FaXTwitter,
        className: "text-[#1DA1F2] text-2xl",
      },
    },
  },
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  works: [
    {
      company: "Tech Solutions Inc.",
      href: "https://techsolutions.com",
      badges: ["Full-time"],
      location: "Remote",
      title: "Senior Full-stack Developer",
      logoUrl: "https://techsolutions.com/logo.png",
      start: "Jan 2020",
      end: "Present",
      description: {
        list: [
          "Developed a complete e-commerce solution using Next.js, Typescript, and Stripe for payment integration. The platform handles over 10,000 transactions monthly.",
          "Collaborated with cross-functional teams to implement new features and optimize existing ones.",
          "Implemented a complete e-commerce solution using Next.js, Typescript, and Stripe for payment integration. The platform handles over 10,000 transactions monthly.",
        ],
      },
    },
    {
      company: "Innovate Labs",
      badges: ["Full-time"],
      href: "https://innovatelabs.io",
      location: "New York, NY",
      title: "Software Engineer",
      logoUrl: "https://innovatelabs.io/logo.png",
      start: "Jun 2016",
      end: "Dec 2019",
      description: {
        list: [
          "Developed a complete e-commerce solution using Next.js, Typescript, and Stripe for payment integration. The platform handles over 10,000 transactions monthly.",
          "Collaborated with cross-functional teams to implement new features and optimize existing ones.",
          "Implemented a complete e-commerce solution using Next.js, Typescript, and Stripe for payment integration. The platform handles over 10,000 transactions monthly.",
        ],
      },
    },
  ],

  education: [
    {
      school: "Stanford University",
      href: "https://stanford.edu",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "https://stanford.edu/logo.png",
      start: "2012",
      end: "2016",
    },
    {
      school: "Online Bootcamp",
      href: "https://bootcamp.com",
      degree: "Full-stack Web Development Certification",
      logoUrl: "https://bootcamp.com/logo.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "Community College",
      href: "https://cc.edu",
      degree: "Associate Degree in Mathematics",
      logoUrl: "https://cc.edu/logo.png",
      start: "2010",
      end: "2012",
    },
  ],

  projects: [
    {
      title: "E-commerce Platform",
      dates: "2022-Present",
      active: true,
      description:
        "Developed a complete e-commerce solution using Next.js, Typescript, and Stripe for payment integration. The platform handles over 10,000 transactions monthly.",
      tech: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ecommerce.com",
          icon: FaGlobe,
          className: "text-[#1DA1F2] text-xl",
        },
        {
          type: "GitHub",
          href: "https://github.com/dillionverma/llm.report",
          icon: FaGithub,
          className: "text-black text-xl",
        },
      ],
      image: "https://ecommerce.com/screenshot.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },

    {
      title: "AI Chatbot",
      href: "https://aichatbot.com",
      dates: "2021-2022",
      active: true,
      description:
        "Created an AI-powered chatbot service using Next.js, Node.js, and Cloudflare Workers. This solution automates customer support for businesses, handling over 100,000 interactions monthly.",
      tech: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://aichatbot.com",
          icon: FaGlobe,
          className: "text-[#1DA1F2] text-xl",
        },
        {
          type: "GitHub",
          href: "https://github.com/dillionverma/llm.report",
          icon: FaGithub,
          className: "text-black text-xl",
        },
      ],
      image: "https://aichatbot.com/screenshot.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
} as const;
