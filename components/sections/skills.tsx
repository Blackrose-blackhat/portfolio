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
    <section id="skills">
      <h2 className="font-mono text-sm text-muted-foreground mb-6">Skills</h2>

      <div className="font-mono text-sm text-foreground/80">
        {skills.join(" · ")}
      </div>
    </section>
  );
}
