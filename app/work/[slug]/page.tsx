import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 py-12 sm:py-20 pb-32">
        {/* Page Icon & Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
        </div>

        {/* Properties Table */}
        <div className="mb-16 border-t border-b border-border/5 py-8 space-y-6">
          <div className="grid grid-cols-[140px_1fr] items-center gap-4 text-[13px]">
            <div className="text-muted-foreground/30 font-bold uppercase tracking-widest">
              Timeline
            </div>
            <div className="text-foreground/80 font-medium tabular-nums">
              {project.timeline}
            </div>
          </div>

          <div className="grid grid-cols-[140px_1fr] items-baseline gap-4 text-[13px]">
            <div className="text-muted-foreground/30 font-bold uppercase tracking-widest">
              Technologies
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-muted-foreground font-mono text-[12px] uppercase tracking-tighter"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[140px_1fr] items-center gap-4 text-[13px]">
            <div className="text-muted-foreground/30 font-bold uppercase tracking-widest">
              Repository
            </div>
            <a
              href={project.github}
              target="_blank"
              className="text-foreground/60 hover:text-primary transition-colors no-underline font-medium"
            >
              {project.github.replace("https://github.com/", "")}
            </a>
          </div>

          <div className="grid grid-cols-[140px_1fr] items-center gap-4 text-[13px]">
            <div className="text-muted-foreground/30 font-bold uppercase tracking-widest">
              Live URL
            </div>
            <a
              href={project.live}
              target="_blank"
              className="text-foreground/60 hover:text-primary transition-colors no-underline font-medium"
            >
              {project.live.replace("https://", "")}
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/30 mb-6">
              Overview
            </h2>
            <p className="text-base leading-relaxed opacity-90">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/30 mb-6">
              Architecture
            </h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-bold text-foreground/80 mb-2">
                  The Challenge
                </h3>
                <p className="text-base leading-relaxed opacity-90">
                  {project.problem}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground/80 mb-2">
                  The Approach
                </h3>
                <p className="text-base leading-relaxed opacity-90">
                  {project.solution}
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="border border-border/5 bg-muted/5 p-8 relative overflow-hidden">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/30 mb-4">
                Business Impact
              </h3>
              <p className="text-base italic leading-relaxed opacity-80 mb-0">
                "{project.impact}"
              </p>
            </div>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-border/5">
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground no-underline flex items-center gap-2 transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
