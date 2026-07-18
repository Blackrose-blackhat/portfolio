import projects from "@/data/projects.json";

export function ProjectsPreview() {
  return (
    <section id="projects">
      <h2 className="font-mono text-sm text-muted-foreground mb-8">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.slug}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-mono text-base font-semibold text-foreground">
                {project.title.toLowerCase()}
              </h3>
              <div className="flex gap-3 font-mono text-xs text-muted-foreground/60">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="hover:text-foreground transition-colors"
                  >
                    live
                  </a>
                )}
              </div>
            </div>
            <p className="text-[14px] text-foreground/70 leading-relaxed mb-2">
              {project.description}
            </p>
            <div className="font-mono text-xs text-muted-foreground/50">
              {project.technologies.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
