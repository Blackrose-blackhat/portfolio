import Link from "next/link";
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

        <div className="mb-12 rounded-2xl border border-border/10 bg-muted/20 px-5 py-5">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground/50 mb-2">
            regional seo
          </p>
          <h2 className="text-lg font-semibold mb-2">
            Looking for a freelance web developer in Jharkhand?
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
            I published a dedicated location page for businesses searching in
            Jharkhand, including Ranchi, Jamshedpur, Dhanbad, and Bokaro.
          </p>
          <Link
            href="/freelance/web-developer-jharkhand"
            className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            view the Jharkhand page →
          </Link>
        </div>

        <Freelance />
      </div>
    </main>
  );
}
