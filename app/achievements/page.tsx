import { Achievements } from "@/components/sections/awards";

export default function AchievementsPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 py-12 sm:py-24 pb-32">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Achievements
          </h1>
          <p className="text-base text-muted-foreground/80 font-medium">
            Recognitions, hackathon wins, and technical milestones.
          </p>
        </header>

        <Achievements />
      </div>
    </main>
  );
}
