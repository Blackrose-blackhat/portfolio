"use client";

import { Mermaid } from "@/components/mermaid";

export function BlogContent({ html }: { html: string }) {
  const parts = html.split(
    /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g,
  );

  return (
    <article className="blog-content">
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          const decoded = part
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");
          return <Mermaid key={i} chart={decoded} />;
        }
        return (
          <div key={i} dangerouslySetInnerHTML={{ __html: part }} />
        );
      })}
    </article>
  );
}
