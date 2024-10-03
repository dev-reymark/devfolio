import { FaGlobe, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const data = {
  name: "John Doe",
  initial: "JD",
  title: "Full-stack Developer",
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
  quote: "Cupidatat ad laboris fugiat nulla ex nulla irure in ad.",
  contact: {
    email: "john.doe@example.com",
    tel: "+1-123-456-7890",
    sms: "+1-123-456-7890",
    social: {
      GitHub: {
        url: "https://github.com/",
        icon: FaGithub,
        className: "text-[#333333] text-2xl",
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
      logoUrl: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/SU_SealColor_web3.png",
      start: "2012",
      end: "2016",
    },
    {
      school: "Online Bootcamp",
      href: "https://bootcamp.com",
      degree: "Full-stack Web Development Certification",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/800px-Harvard_University_coat_of_arms.svg.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "Community College",
      href: "https://cc.edu",
      degree: "Associate Degree in Mathematics",
      logoUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-ZqlUyS1PAOvgOoS7eHm9qo71Ui_E8lUH6gCNOLY_zw_46u0s",
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
        "Developed a complete e-commerce solution using Next.js, Typescript, and Stripe for payment integration. The platform handles over 10,000 transactions monthly. Collaborated with cross-functional teams to implement new features and optimize existing ones.",
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
          className: "text-success text-xl",
        },
        {
          type: "GitHub",
          href: "https://github.com",
          icon: FaGithub,
          className: "text-black text-xl",
        },
      ],
      image: "https://ecommerce.com/screenshot.png",
      video:
        "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4",
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
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://aichatbot.com",
          icon: FaGlobe,
          className: "text-success text-xl",
        },
        {
          type: "GitHub",
          href: "https://github.com",
          icon: FaGithub,
          className: "text-black text-xl",
        },
      ],
      image: "https://aichatbot.com/screenshot.png",
      video:
        "https://videos.pexels.com/video-files/6963744/6963744-hd_1920_1080_25fps.mp4",
    },
  ],
} as const;
