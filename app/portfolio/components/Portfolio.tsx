import { PortfolioData } from "../../../types/portfolio";
import { FlickeringGrid } from "./ui/flickering-grid";
import { Briefcase, MapPin, GraduationCap, ExternalLink, Download, Ribbon, Trophy } from "lucide-react";
import { Card, CardHeader, CardFooter, Chip, Button } from "@heroui/react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5 9.6 3 8.5c1.2.3 2.5.5 3.8.5C5 7 6 3 6 3s3 4 8 5c-.1-3 2-4.5 4-4.5 1.4 0 2.8.6 3.7 1.5.8-.3 1.7-.8 2.5-1.2z"></path>
  </svg>
);

export function Portfolio({ data }: { data: PortfolioData }) {
    return (
        <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20">
            {/* Flickering Grid Background */}
            <div className="absolute inset-x-0 top-0 h-[400px] overflow-hidden z-0">
                <FlickeringGrid
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    color="rgba(14, 165, 233, 0.4)"
                    style={{
                        maskImage: "linear-gradient(to bottom, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                    }}
                />
            </div>

            <main className="relative z-10 mx-auto max-w-5xl px-5 pt-20">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start pt-10">
                    <div className="flex-1 space-y-5 text-center md:text-left">
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 md:text-7xl">
                            Hi, I'm {data.name.split(" ")[0]}
                        </h1>
                        <p className="text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
                            {data.jobTitle}
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl">
                            {data.professionalSummary}
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-4">
                            {data.social.github && (
                                <a href={data.social.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                                    <GithubIcon className="w-5 h-5" />
                                </a>
                            )}
                            {data.social.linkedin && (
                                <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[#0A66C2] hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                                    <LinkedinIcon className="w-5 h-5" />
                                </a>
                            )}
                            {data.social.twitter && (
                                <a href={data.social.twitter} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                                    <TwitterIcon className="w-5 h-5" />
                                </a>
                            )}
                            {data.resumeUrl && (
                                <Button as="a" href={data.resumeUrl} target="_blank" color="primary" variant="shadow" className="font-medium" startContent={<Download className="w-4 h-4" />}>
                                    Download Resume
                                </Button>
                            )}
                        </div>
                    </div>
                    {data.profilePhoto && (
                        <div className="flex-shrink-0">
                            <img src={data.profilePhoto} alt={data.name} className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full ring-4 ring-white dark:ring-zinc-800 shadow-2xl" />
                        </div>
                    )}
                </div>

                {/* Experience Section */}
                {data.experience.length > 0 && (
                    <section className="mt-32">
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-10">
                            My career journey
                        </h2>
                        <div className="mx-auto mt-2">
                            {data.experience.map((work, idx) => (
                                <div key={idx} className="group relative flex gap-x-5 py-6 first:pt-0 last:pb-0">
                                    <div className="relative flex w-10 flex-none justify-center">
                                        <div className="absolute bottom-0 top-10 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent dark:from-zinc-800 dark:via-zinc-800 group-last:hidden" />
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm ring-4 ring-zinc-50 dark:ring-zinc-950">
                                            <Briefcase className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 pb-6 group-last:pb-0">
                                        <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                                            {work.startDate} - {work.current ? "Present" : work.endDate}
                                        </h3>
                                        <h4 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
                                            {work.jobTitle}
                                        </h4>
                                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                                            <span className="font-semibold text-sky-600 dark:text-sky-400">{work.company}</span>
                                            {work.location && (
                                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {work.location}</span>
                                            )}
                                        </div>
                                        {work.isRemote && (
                                            <div className="mt-3">
                                                <Chip size="sm" variant="flat" color="primary" className="uppercase tracking-[0.16em] text-[10px] font-semibold">Remote</Chip>
                                            </div>
                                        )}
                                        {work.description && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{work.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education Section */}
                {data.education.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-10">
                            Academic foundation
                        </h2>
                        <div className="mx-auto mt-2">
                            {data.education.map((edu, idx) => (
                                <div key={idx} className="group relative flex gap-x-5 py-6 first:pt-0 last:pb-0">
                                    <div className="relative flex w-10 flex-none justify-center">
                                        <div className="absolute bottom-0 top-10 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent dark:from-zinc-800 dark:via-zinc-800 group-last:hidden" />
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm ring-4 ring-zinc-50 dark:ring-zinc-950">
                                            <GraduationCap className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 pb-6 group-last:pb-0">
                                        {edu.graduationYear && (
                                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Class of {edu.graduationYear}</p>
                                        )}
                                        <h4 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">{edu.institution}</h4>
                                        <h5 className="mt-1 text-base font-medium tracking-tight text-sky-600 dark:text-sky-400">{edu.degree}</h5>
                                        {edu.GPA && (
                                            <div className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">GPA: {edu.GPA}</div>
                                        )}
                                        {edu.description && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{edu.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Certifications Section */}
                {data.certifications.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-10">
                            Lifelong learning
                        </h2>
                        <div className="mx-auto mt-2">
                            {data.certifications.map((cert, idx) => (
                                <div key={idx} className="group relative flex gap-x-5 py-6 first:pt-0 last:pb-0">
                                    <div className="relative flex w-10 flex-none justify-center">
                                        <div className="absolute bottom-0 top-10 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent dark:from-zinc-800 dark:via-zinc-800 group-last:hidden" />
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm ring-4 ring-zinc-50 dark:ring-zinc-950">
                                            <Ribbon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 pb-6 group-last:pb-0">
                                        {(cert.issueDate || cert.expiryDate) && (
                                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                                                {cert.issueDate ? `Issued ${cert.issueDate}` : ""}
                                                {cert.issueDate && cert.expiryDate ? " - " : ""}
                                                {cert.expiryDate ? `Expires ${cert.expiryDate}` : ""}
                                            </p>
                                        )}
                                        <h4 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">{cert.name}</h4>
                                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                                            <span className="font-semibold text-sky-600 dark:text-sky-400">{cert.issuer}</span>
                                            {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Hackathons Section */}
                {data.hackathons && data.hackathons.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-10">
                            Hackathons
                        </h2>
                        <div className="mx-auto mt-2">
                            {data.hackathons.map((hack, idx) => (
                                <div key={idx} className="group relative flex gap-x-5 py-6 first:pt-0 last:pb-0">
                                    <div className="relative flex w-10 flex-none justify-center">
                                        <div className="absolute bottom-0 top-10 w-px bg-gradient-to-b from-zinc-200 via-zinc-200 to-transparent dark:from-zinc-800 dark:via-zinc-800 group-last:hidden" />
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm ring-4 ring-zinc-50 dark:ring-zinc-950">
                                            <Trophy className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 pb-6 group-last:pb-0">
                                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{hack.date}</p>
                                        <h4 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">{hack.name}</h4>
                                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
                                            {hack.win && <span className="font-semibold text-emerald-600 dark:text-emerald-500">{hack.win}</span>}
                                            {hack.location && (
                                                <>
                                                    {hack.win && <span>&bull;</span>}
                                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {hack.location}</span>
                                                </>
                                            )}
                                        </div>
                                        {hack.description && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{hack.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills Section */}
                {data.skills.length > 0 && (
                    <section className="mt-24">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-10">
                            Skills & Technologies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill, idx) => (
                                <Chip key={idx} size="lg" variant="bordered" className="border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                                    {skill}
                                </Chip>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects Section */}
                {data.projects.length > 0 && (
                    <section className="mt-24">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-10">
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {data.projects.map((proj, idx) => (
                                <Card key={idx} className="overflow-hidden group border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                                    <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                                        {proj.image ? (
                                            <img src={proj.image} alt={proj.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-50 dark:from-sky-900/40 dark:to-indigo-900/40">
                                                <span className="text-xl font-medium text-zinc-400">Project</span>
                                            </div>
                                        )}
                                        {proj.active && (
                                            <div className="absolute top-3 right-3">
                                                <Chip color="success" size="sm" variant="flat">Active</Chip>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{proj.name}</h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{proj.description}</p>
                                    </div>
                                    <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                                        {proj.link && (
                                            <Button as="a" href={proj.link} target="_blank" variant="flat" size="sm" startContent={<ExternalLink className="w-4 h-4" />}>
                                                Visit Live
                                            </Button>
                                        )}
                                        {proj.github && (
                                            <Button as="a" href={proj.github} target="_blank" variant="bordered" size="sm" startContent={<GithubIcon className="w-4 h-4" />}>
                                                GitHub
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className="relative z-10 mx-auto max-w-5xl px-5 mt-32 pb-10 border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    {data.social.github && (
                        <a href={data.social.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
                            <GithubIcon className="w-5 h-5" />
                        </a>
                    )}
                    {data.social.linkedin && (
                        <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#0A66C2] transition">
                            <LinkedinIcon className="w-5 h-5" />
                        </a>
                    )}
                    {data.social.twitter && (
                        <a href={data.social.twitter} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
                            <TwitterIcon className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </footer>
        </div>
    );
}
