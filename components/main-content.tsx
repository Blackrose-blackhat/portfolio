"use client";

import Link from "next/link";
import { Overview } from "@/components/sections/overview";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { GitHubContributionGraph } from "@/components/sections/github-calendar";
import { ProjectsPreview } from "@/components/sections/projects-preview";

export function MainContent() {
  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 pb-32">
        <nav className="flex justify-end pt-6 font-mono text-sm">
          <Link
            href="/blogs"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            blogs →
          </Link>
        </nav>
        <div className="space-y-24">
          <Overview />
          <About />
          <Experience />
          <ProjectsPreview />
          <GitHubContributionGraph />
          <Skills />
        </div>

        <footer className="mt-32 pt-8 border-t border-border/10 font-mono text-sm">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground/60 mb-4">
            <a
              href="https://musharraf.codes"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              website
            </a>
            <a
              href="https://github.com/Blackrose-blackhat"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/mushraf-parwej"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              linkedin
            </a>
            <a
              href="mailto:mushrafparwej@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              email
            </a>
            <a
              href="/blogs"
              className="hover:text-foreground transition-colors"
            >
              blogs
            </a>
          </div>
          <p className="text-muted-foreground/40 text-xs">
            built by musharaf parwej
          </p>
        </footer>
      </div>
    </main>
  );
}
