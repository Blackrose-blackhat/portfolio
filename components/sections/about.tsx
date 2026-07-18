export function About() {
  return (
    <section id="about">
      <h2 className="font-mono text-sm text-muted-foreground mb-6">About</h2>
      <div className="space-y-4">
        <p className="text-[15px] leading-relaxed text-foreground/90">
          full-stack developer with a strong foundation in computer science and
          hands-on experience building scalable applications. my work spans from
          traditional web development to blockchain integration and AI-powered
          tools.
        </p>

        <div className="font-mono text-sm text-muted-foreground mt-6">
          <p className="mb-1">
            <span className="text-foreground/70">degree:</span> B.Tech in
            Computer Science
          </p>
          <p className="mb-1">
            <span className="text-foreground/70">university:</span> C.V Raman
            Global University
          </p>
          <p className="mb-0">
            <span className="text-foreground/70">period:</span> 2021 – 2025
          </p>
        </div>
      </div>
    </section>
  );
}
