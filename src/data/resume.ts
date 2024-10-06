import { FaGlobe, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiTypescript,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";

export const data = {
  name: "John Doe",
  initial: "JD",
  title: "Full-stack Developer",
  url: "https://johndoe.dev",
  cv: "/static/pdf/file-sample_150kB.pdf",
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
    {
      name: "HTML5",
      icon: SiHtml5,
      className: "text-[#E34F26]",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      className: "text-[#1572B6]",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      className: "text-[#F7DF1E]",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      className: "text-[#3178C6]",
    },
    {
      name: "React",
      icon: SiReact,
      className: "text-[#61DAFB]",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      className: "text-[#000000]",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      className: "text-[#339933]",
    },
    {
      name: "Python",
      icon: SiPython,
      className: "text-[#FFD43B]",
    },
    {
      name: "PHP",
      icon: SiPhp,
      className: "text-[#777777]",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      className: "text-[#FF2D2D]",
    },
    {
      name: "Postgres",
      icon: SiPostgresql,
      className: "text-[#336791]",
    },
    {
      name: "Microsoft SQL Server",
      icon: SiMicrosoftsqlserver,
      className: "text-[#0086B3]",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      className: "text-[#4472C4]",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      className: "text-[#382177]",
    },
    {
      name: "Git",
      icon: SiGit,
      className: "text-[#F05032]",
    },
  ],
  works: [
    {
      company: "Tech Solutions Inc.",
      href: "https://techsolutions.com",
      badges: ["Full-time"],
      location: "Remote",
      title: "Senior Full-stack Developer",
      logoUrl:
        "https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      logoUrl:
        "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/SU_SealColor_web3.png",
      start: "2012",
      end: "2016",
      location: "Stanford, CA, USA",
      GPA: "3.9",
      description:
        "Focused on algorithms, data structures, and software engineering. Participated in research projects in AI and machine learning.",
      relevantCourses: [
        "Algorithms",
        "Data Structures",
        "Artificial Intelligence",
        "Software Engineering",
      ],
      achievements: ["Dean's List", "Undergraduate Research Fellow"],
      activities: ["Computer Science Club", "Hackathon Organizer"],
      thesis: "Developing Scalable AI Systems for Large Datasets",
    },
    {
      school: "Online Bootcamp",
      href: "https://bootcamp.com",
      degree: "Full-stack Web Development Certification",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/800px-Harvard_University_coat_of_arms.svg.png",
      start: "2019",
      end: "2020",
      location: "Online",
      description:
        "Completed an intensive 6-month program focusing on front-end and back-end web development technologies.",
      relevantCourses: ["React", "Node.js", "Databases", "APIs"],
      achievements: [],
      certifications: ["Certified Full-stack Developer"],
      activities: ["Web Development Club", "Hackathon Organizer"],
      thesis: "Developing Scalable AI Systems for Large Datasets",
    },
    {
      school: "Community College",
      href: "https://cc.edu",
      degree: "Associate Degree in Mathematics",
      logoUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-ZqlUyS1PAOvgOoS7eHm9qo71Ui_E8lUH6gCNOLY_zw_46u0s",
      start: "2010",
      end: "2012",
      location: "New York, NY",
      description:
        "Foundation in calculus, linear algebra, and statistics. Focused on building a solid math background before pursuing computer science.",
      relevantCourses: ["Calculus", "Linear Algebra", "Statistics"],
      achievements: [],
      certification: [],
      activities: [],
      thesis: "",
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
