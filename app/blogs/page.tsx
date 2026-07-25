import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Thoughts on building software, developer tools, and AI.",
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 pt-16 sm:pt-24 pb-32">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          Blogs
        </h1>
        <p className="text-base text-muted-foreground mb-12">
          Thoughts on building software, developer tools, and AI.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="block group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h2 className="text-base font-semibold text-foreground group-hover:text-foreground/70 transition-colors">
                  {post.title}
                </h2>
                <span className="font-mono text-xs text-muted-foreground/50 shrink-0">
                  {post.date}
                </span>
              </div>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/10">
          <Link
            href="/"
            className="text-sm font-mono text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            ← home
          </Link>
        </div>
      </div>
    </main>
  );
}
