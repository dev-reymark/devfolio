import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
    name: "Alex Developer",
    jobTitle: "Senior Full-Stack Engineer",
    professionalSummary: "Passionate software engineer with 5+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud infrastructure. Always eager to learn new technologies and solve complex problems.",
    email: "alex.dev@example.com",
    profilePhoto: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    resumeUrl: "/resume.pdf",
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    },
    experience: [
        {
            jobTitle: "Senior Frontend Engineer",
            company: "TechNova Solutions",
            location: "San Francisco, CA",
            isRemote: true,
            employmentType: "Full-time",
            startDate: "2022-03-01",
            current: true,
            description: "Leading the frontend architecture using Next.js and Tailwind CSS. Mentoring junior developers and improving core web vitals by 40%."
        },
        {
            jobTitle: "Software Developer",
            company: "Creative Digital",
            location: "Austin, TX",
            isRemote: false,
            employmentType: "Full-time",
            startDate: "2019-06-01",
            endDate: "2022-02-28",
            description: "Developed and maintained multiple client-facing applications using React and Node.js. Integrated third-party payment gateways and improved test coverage."
        }
    ],
    education: [
        {
            institution: "University of Technology",
            degree: "Bachelor of Science in Computer Science",
            graduationYear: "2019",
            location: "Austin, TX",
            description: "Graduated with Honors. Focused on web development, algorithms, and human-computer interaction.",
            GPA: "3.8"
        }
    ],
    certifications: [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            issueDate: "2023-01",
            credentialId: "AWS-123456"
        }
    ],
    hackathons: [
        {
            name: "Global AI Hackathon",
            date: "October 2023",
            location: "San Francisco, CA",
            description: "Built an AI-powered code reviewer using OpenAI's API. Placed 2nd overall out of 50+ teams.",
            win: "2nd Place Winner"
        }
    ],
    skills: [
        "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker", "AWS", "GraphQL", "Figma"
    ],
    projects: [
        {
            name: "DevFolio Dashboard",
            active: true,
            description: "A comprehensive dashboard for managing developer portfolios and analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            link: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "EcoTrack API",
            active: false,
            description: "REST API service for tracking carbon footprint metrics for enterprise companies.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            github: "https://github.com"
        }
    ]
};
