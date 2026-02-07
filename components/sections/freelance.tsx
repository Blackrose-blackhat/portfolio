export function Freelance() {
  const freelanceProjects = [
    {
      title: "Inventory & Invoice Management System",
      description:
        "Developed a comprehensive Electron.js desktop application for automated invoice generation. Included complex tax logic for CGST, SGST, and IGST calculations with inventory tracking.",
      tech: ["Electron.js", "React", "Node.js", "SQLite"],
      period: "2024",
    },
    {
      title: "Agency Landing Page",
      description:
        "Designed and developed a high-conversion landing page for a creative agency, focusing on performance, responsive design, and modern brand aesthetics.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      period: "2024",
    },
    {
      title: "Resume ATS Checker Frontend",
      description:
        "Built a sophisticated frontend for an AI-powered Resume ATS checker, providing users with real-time feedback on resume compatibility and keyword optimization.",
      tech: ["React.js", "TypeScript", "TailwindCSS"],
      period: "2023",
    },
  ];

  return (
    <section id="freelance" className="mb-0">
      <h2 className="text-xl font-bold border-b border-border/10 pb-2 mb-8">
        Freelance
      </h2>

      <div className="space-y-10">
        {freelanceProjects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-foreground m-0">
                {project.title}
              </h3>
            </div>

            <p className="text-[15px] leading-relaxed text-muted-foreground/80 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-muted-foreground/30 uppercase tracking-widest px-2 py-0.5 border border-border/5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
