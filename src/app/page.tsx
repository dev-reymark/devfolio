import {
  Avatar,
  Button,
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
import { IconWrapper } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black">
      <main className="max-w-screen-md mx-auto p-2 py-12 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Hi, I&apos;m {data.initial} 👋
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-xl font-semibold">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {Object.values(data.contact.social).map((social, index) => (
                <div key={index}>
                  <Button
                    color="primary"
                    variant="flat"
                    size="sm"
                    as={Link}
                    href={social.url}
                    className="w-full text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className={`w-5 h-5 ${social.className}`} />
                  </Button>
                </div>
              ))}
            </div>

            <Button
              as={Link}
              className="w-[150px]"
              color="primary"
              variant="shadow"
              download
              href={data.cv}
            >
              Download CV
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={data.avatar.url}
              alt={data.avatar.alt || "Profile picture"}
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
        </div>

        <div id="about" className="mt-8 p-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            About
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-lg font-medium">
            {data.summary}
          </p>
        </div>

        <div id="education" className="mt-8 p-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Education
          </h2>
          {data.education.map(
            (
              {
                school,
                location,
                degree,
                logoUrl,
                start,
                end,
                relevantCourses,
                achievements,
                activities,
                thesis,
              },
              index
            ) => (
              <div
                key={index}
                className="flex flex-col py-4 border-b last:border-0"
              >
                <div className="flex items-center gap-5">
                  <Avatar isBordered radius="full" size="md" src={logoUrl} />
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                      {school} · {location}
                    </h4>
                    <h5 className="text-md text-gray-500 dark:text-gray-400 tracking-tight">
                      {degree}
                    </h5>
                    <p>
                      {start} - {end}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-3">
                  {relevantCourses?.length > 0 && (
                    <div className="mt-2">
                      <h6 className="font-semibold text-gray-900 dark:text-white">
                        Relevant Courses:
                      </h6>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {relevantCourses.map((course, courseIndex) => (
                          <Chip
                            color="primary"
                            radius="sm"
                            size="sm"
                            key={courseIndex}
                          >
                            {course}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}

                  {achievements?.length > 0 && (
                    <div className="mt-2">
                      <h6 className="font-semibold text-gray-900 dark:text-white">
                        Achievements:
                      </h6>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {achievements.map((achievement, achievementIndex) => (
                          <Chip
                            size="sm"
                            radius="sm"
                            color="primary"
                            key={achievementIndex}
                          >
                            {achievement}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}

                  {activities?.length > 0 && (
                    <div className="mt-2">
                      <h6 className="font-semibold text-gray-900 dark:text-white">
                        Activities & Clubs:
                      </h6>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {activities.map((activity, activityIndex) => (
                          <Chip
                            key={activityIndex}
                            color="primary"
                            size="sm"
                            radius="sm"
                          >
                            {activity}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}

                  {thesis && (
                    <div className="mt-2">
                      <h6 className="font-semibold text-gray-900 dark:text-white">
                        Thesis:
                      </h6>
                      <Link
                        isExternal
                        color="foreground"
                        className="font-extrabold"
                        href="https://github.com"
                        showAnchorIcon
                      >
                        {thesis}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        <div id="work" className="mt-8 p-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div>
            {data.works.map((work, index) => (
              <div key={index} className="group relative flex gap-x-5 mt-6">
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:left-3 after:w-px after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 w-8 h-8 flex justify-center items-center rounded-full bg-gray-100 dark:bg-neutral-800">
                    <IoBriefcaseOutline className="text-gray-600 dark:text-neutral-400" />
                  </div>
                </div>

                <div className="flex-grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    {work.start} - {work.end}
                  </h3>

                  <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                    {work.company}
                  </p>

                  {work.description?.list && (
                    <ul className="list-disc ms-6 mt-2 space-y-1.5">
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

        <div id="skills" className="mt-8 p-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {data.skills.map((skill, index) => (
              <Chip
                key={index}
                color="primary"
                size="lg"
                radius="sm"
                className="hover:shadow-md transition-shadow"
                startContent={
                  skill.icon && (
                    <IconWrapper className="text-slate-50">
                      <skill.icon
                        color={
                          skill.className?.match(/#[A-Fa-f0-9]{6}/)?.[0] ||
                          "#000"
                        }
                        className="text-lg"
                      />
                    </IconWrapper>
                  )
                }
              >
                {skill.name}
              </Chip>
            ))}
          </div>
        </div>

        <div id="projects" className="mt-8 p-2">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {data.projects.map((proj, index) => (
              <Card
                key={index}
                isFooterBlurred
                className="w-full hover:shadow-lg transition-shadow duration-300 ease-out"
              >
                {proj.video ? (
                  <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-48 object-cover rounded-t-lg"
                  >
                    <source src={proj.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    width={500}
                    height={200}
                    src="https://via.placeholder.com/500x200"
                    alt="Project Thumbnail"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}

                <CardHeader className="flex flex-col items-start p-4">
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {proj.title}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {proj.dates}
                  </p>
                </CardHeader>

                <CardBody className="flex flex-col space-y-4 p-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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

                <CardFooter className="flex gap-2 p-4">
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
