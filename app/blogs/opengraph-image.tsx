import { bannerSize, renderBanner } from "@/lib/og-banner";

export const size = bannerSize;
export const contentType = "image/png";
export const alt = "Blogs by Musharaf Parwej";

export default function Image() {
  return renderBanner({
    title: "Blogs",
    description: "Thoughts on building software, developer tools, and AI.",
    label: "BLOG",
  });
}
