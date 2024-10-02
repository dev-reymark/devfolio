import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Link,
} from "@nextui-org/react";
import { IoBriefcaseOutline } from "react-icons/io5";
import Contact from "@/components/contact";
import { data } from "@/data/resume";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-screen-md mx-auto p-2 py-12 space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold">
              Hi, I&apos;m {data.initial} 👋
            </h1>
            <p className="text-gray-600 text-xl font-bold">
              {data.description}
            </p>
          </div>
          <div>
            <Image
              src={data.avatar.url}
              alt={data.avatar.alt}
              className="rounded-full size-48"
            />
          </div>
        </div>

        <div id="about" className="mt-8">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-gray-600 text-lg font-semibold">{data.summary}</p>
        </div>

        <div id="education" className="mt-8">
          <h2 className="text-2xl font-bold">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="flex justify-between py-4">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src={edu.logoUrl} />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {edu.school}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    {edu.degree}
                  </h5>
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-lg font-semibold">
                  {edu.start} - {edu.end}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div id="work" className="mt-8">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <div>
            <div>
              {data.works.map((work, index) => (
                <div key={index} className="group relative flex gap-x-5 mt-4">
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <IoBriefcaseOutline />
                    </div>
                  </div>

                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                      {work.start} - {work.end}
                    </h3>

                    <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                      {work.company}
                    </p>

                    {work.description && work.description.list && (
                      <ul className="list-disc ms-6 mt-3 space-y-1.5">
                        {work.description.list.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="skills" className="mt-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {data.skills.map((skill, index) => (
              <Chip key={index} color="primary" size="lg" radius="sm">
                {skill}
              </Chip>
            ))}
          </div>
        </div>

        <div id="projects" className="mt-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {data.projects.map((proj, index) => (
              <Card
                key={index}
                isFooterBlurred
                className="w-full hover:shadow-lg transition-all duration-300 ease-out"
              >
                {proj.video ? (
                  <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="object-cover object-top"
                  >
                    <source src={proj.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    width={500}
                    height={200}
                    src={proj.image}
                    alt={proj.title}
                    className="object-cover object-top"
                  />
                )}

                <CardHeader className="flex flex-col items-start">
                  <p className="text-lg font-bold">{proj.title}</p>
                  <p className="text-gray-500">{proj.dates}</p>
                </CardHeader>

                <CardBody className="flex flex-col space-y-4">
                  <p>{proj.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.map((tech, i) => (
                      <Chip
                        key={i}
                        radius="sm"
                        size="sm"
                        color="primary"
                        variant="solid"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </CardBody>

                <CardFooter className="flex gap-2">
                  {proj.links.map((link, linkIndex) => {
                    const Icons = link.icon;
                    return (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Chip
                          startContent={<Icons className={link.className} />}
                          variant="shadow"
                          radius="sm"
                        >
                          {link.type}
                        </Chip>
                      </Link>
                    );
                  })}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div id="contact" className="mt-8">
          <Contact />
        </div>
      </main>
    </div>
  );
}
