import { Projects } from "@/components/sections/projects";

export default function WorkPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 py-12 sm:py-24 pb-32">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Work</h1>
          <p className="text-base text-muted-foreground/80 font-medium">
            A collection of technical projects, open-source contributions, and
            engineering case studies.
          </p>
        </header>

        <Projects />
      </div>
    </main>
  );
}
