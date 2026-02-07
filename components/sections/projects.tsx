import Link from "next/link";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <section id="projects" className="w-full mb-0">
      <div className="flex items-center justify-between mb-8 border-b border-border/10 pb-2">
        <h2 className="text-[13px] font-bold uppercase tracking-widest text-muted-foreground/40">
          Archive
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <Link
            key={proj.slug}
            href={`/work/${proj.slug}`}
            className="group block border border-border/10 rounded-sm bg-muted/5 hover:bg-muted/10 transition-all duration-300 no-underline overflow-hidden"
          >
            <div className="p-5">
              <h3 className="text-[15px] font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {proj.title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-tighter"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}

        <div className="border border-dashed border-border/10 rounded-sm flex items-center justify-center p-8 opacity-20 hover:opacity-50 transition-opacity cursor-default group">
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            End of list
          </span>
        </div>
      </div>
    </section>
  );
}
