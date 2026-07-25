import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 pt-16 sm:pt-24 pb-32">
        <header className="mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            {post.title}
          </h1>
          <span className="font-mono text-sm text-muted-foreground/60">
            {post.date}
          </span>
        </header>

        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-border/10">
          <Link
            href="/blogs"
            className="text-sm font-mono text-muted-foreground/60 hover:text-foreground transition-colors"
          >
            ← all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
