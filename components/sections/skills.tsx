const skills = [
  "Go",
  "TypeScript",
  "Rust",
  "Langchain",
  "LangGraph",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
];

export function Skills() {
  return (
    <section id="skills" className="mb-0">
      <h2 className="text-xl font-bold border-b border-border/10 pb-2 mb-6">
        Primary Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-[14px] font-medium bg-muted/40 text-foreground/80 rounded-sm border border-border/10 hover:bg-muted/60 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
