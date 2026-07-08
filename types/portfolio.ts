export interface Experience {
    jobTitle: string;
    company: string;
    location?: string;
    isRemote?: boolean;
    employmentType?: string;
    startDate: string;
    endDate?: string;
    current?: boolean;
    description?: string;
}

export interface Education {
    institution: string;
    degree: string;
    location?: string;
    graduationYear?: string;
    logoUrl?: string;
    href?: string;
    description?: string;
    GPA?: string;
    thesis?: string;
    relevantCourses?: string[];
    achievements?: string[];
    activities?: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    issueDate?: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
}

export interface Project {
    name: string;
    active?: boolean;
    description?: string;
    image?: string;
    video?: string;
    link?: string;
    github?: string;
}

export interface SocialLinks {
    linkedin?: string;
    github?: string;
    twitter?: string;
    portfolio?: string;
    facebook?: string;
    instagram?: string;
}

export interface Hackathon {
    name: string;
    date: string;
    location?: string;
    description?: string;
    projectUrl?: string;
    win?: string;
}

export interface PortfolioData {
    name: string;
    jobTitle: string;
    professionalSummary: string;
    email: string;
    profilePhoto?: string;
    resumeUrl?: string;
    social: SocialLinks;
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    hackathons: Hackathon[];
    skills: string[];
    projects: Project[];
}
