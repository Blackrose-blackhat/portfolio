"use client";

import Link from "next/link";

import { Overview } from "@/components/sections/overview";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { GitHubContributionGraph } from "@/components/sections/github-calendar";
import { Contact } from "@/components/sections/contact";

export function MainContent() {
  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 pt-6 sm:pt-10 pb-32">
        <div className="space-y-16">
          <Overview />
          <About />
          <Experience />
          <GitHubContributionGraph />
          <Skills />

          {/* <Contact /> */}
        </div>
      </div>
    </main>
  );
}
