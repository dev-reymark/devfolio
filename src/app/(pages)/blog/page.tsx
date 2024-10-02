// C:\Users\Dev\Desktop\Personal\portfolio\src\app\(pages)\blog\page.tsx

import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { Chip, Image } from "@nextui-org/react";

interface Post {
  slug: string;
  title: string;
  date: string;
  alt: string;
  imageUrl: string;
  desc: string;
  tags: string;
  category: string;
  author: {
    name: string;
    role: string;
    href: string;
    authorImage: string;
  };
}

const postsDirectory = path.join(process.cwd(), "posts");

// Fetch metadata for all posts
async function getPosts(): Promise<Post[]> {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const { data } = matter(fs.readFileSync(filePath, "utf8"));

    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    } as Post;
  });
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <>
      <div className="p-2 py-12">
        <div className="max-w-screen-md mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with these blog posts.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 py-6 gap-12 border-t border-gray-200">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="py-6">
                  <Image
                    className="object-center rounded-xl"
                    src={post.imageUrl}
                    alt={post.alt}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <Chip size="sm" radius="sm" color="warning" variant="shadow">
                    {post.category}
                  </Chip>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.desc}
                  </p>
                </div>
                <div className="relative mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.split(",").map((tag, index) => (
                    <Chip key={index} size="sm" color="primary" radius="sm">
                      {tag.trim()}
                    </Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
