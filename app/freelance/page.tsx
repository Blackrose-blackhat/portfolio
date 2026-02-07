import { Freelance } from "@/components/sections/freelance";

export default function FreelancePage() {
  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 py-12 sm:py-24 pb-32">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Freelance</h1>
          <p className="text-base text-muted-foreground/80 font-medium">
            Professional client engagements and production-grade solutions
            delivered as an independent engineer.
          </p>
        </header>

        <Freelance />
      </div>
    </main>
  );
}
