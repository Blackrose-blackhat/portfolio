import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { bannerSize, renderBanner } from "@/lib/og-banner";

export const size = bannerSize;
export const contentType = "image/png";
export const alt = "Blog post by Musharaf Parwej";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return renderBanner({
    title: post?.title ?? "Blogs",
    description: post?.description ?? "",
    label: post ? `BLOG · ${post.date}` : "BLOG",
  });
}
