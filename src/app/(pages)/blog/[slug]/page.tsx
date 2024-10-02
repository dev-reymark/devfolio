import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Key, ReactElement } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { Chip, Link } from "@nextui-org/react";
import { Metadata } from "next";
import React from "react";

const postsDirectory = path.join(process.cwd(), "posts");

// Fetch content for each post based on its slug
async function getPostData(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  return { content, frontMatter: data };
}

// Dynamically generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { frontMatter } = await getPostData(params.slug);

  return {
    title: frontMatter.title,
    description: frontMatter.desc,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.desc,
      url: `/blog/${params.slug}`,
      images: [
        {
          url: frontMatter.imageUrl,
          alt: frontMatter.alt,
        },
      ],
      type: "article",
      publishedTime: frontMatter.date,
      authors: [frontMatter.author.href],
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description: frontMatter.desc,
      images: [frontMatter.imageUrl],
    },
  };
}

// Dynamic route component for blog posts
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}): Promise<ReactElement> {
  const { content, frontMatter } = await getPostData(params.slug);

  return (
    <div className="max-w-screen-lg mx-auto px-4 p-2 py-6">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
                href="/blog"
              >
                <IoIosArrowBack />
                Back to Blog
              </Link>

              <div className="space-y-2">
                <Chip size="sm" variant="shadow" radius="sm" color="warning">
                  {frontMatter.category}
                </Chip>

                <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                  {frontMatter.title}
                </h2>
              </div>

              <div className="flex">
                <time dateTime={frontMatter.date} className="text-gray-500">
                  {frontMatter.date} · {frontMatter.readingTime}
                </time>
              </div>

              <MDXRemote source={content} />

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                <div className="flex flex-wrap items-center gap-2">
                  {frontMatter.tags
                    .split(",")
                    .map((tag: string, index: Key | null | undefined) => (
                      <Chip key={index} color="primary" size="sm" radius="sm">
                        {tag.trim()}
                      </Chip>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for each post
export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}
