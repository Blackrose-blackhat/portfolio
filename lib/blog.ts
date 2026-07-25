import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(blogsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(blogsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const filePath = path.join(blogsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content: contentHtml,
  };
}
