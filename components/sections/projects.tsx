import Link from "next/link";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <section id="projects" className="w-full mb-0">
      

      <div className="grid grid-cols-1 gap-5 ">
        {projects.map((proj) => (
          <Link
            key={proj.slug}
            href={`/work/${proj.slug}`}
            className="group block border border-border/10 rounded-md bg-muted/5 hover:bg-muted/10 transition-all duration-300 no-underline overflow-hidden"
          >
            <div className=" ">
              <div className="min-w-0">
                <h3 className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-[13px] text-muted-foreground/70 mt-1">
                  {proj.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground/70">
                <span className="font-mono uppercase tracking-tighter">
                  {proj.role}
                </span>
                <span className="opacity-30">•</span>
                <span className="font-mono uppercase tracking-tighter">
                  {proj.technologies.slice(0, 3).join(" / ")}
                </span>
              </div>

              <div className="mt-4 text-[12px] font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                View →
              </div>
            </div>
          </Link>
        ))}

        <div className="border border-dashed border-border/10 rounded-md flex items-center justify-center p-6 opacity-30 hover:opacity-60 transition-opacity cursor-default group">
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70">
            End of list
          </span>
        </div>
      </div>
    </section>
  );
}
