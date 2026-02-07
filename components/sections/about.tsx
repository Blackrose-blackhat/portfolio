export function About() {
  return (
    <section id="about" className="mb-0">
      <h2 className="text-xl font-bold border-b border-border/10 pb-2 mb-4">
        About
      </h2>
      <div className="space-y-4">
        <p className="text-base leading-relaxed opacity-90">
          I'm a passionate full-stack developer with a strong foundation in
          computer science and hands-on experience in building scalable
          applications. My journey spans from traditional web development to
          cutting-edge technologies like blockchain integration and AI-powered
          tools.
        </p>

        <div className="bg-muted/30 border-l-2 border-primary/40 px-5 py-4 my-6">
          <h3 className="text-sm font-bold mb-1 tracking-wider uppercase text-muted-foreground/80">
            Education
          </h3>
          <p className="text-base font-semibold mb-0">
            B.Tech in Computer Science
          </p>
          <div className="flex items-center text-sm text-muted-foreground/70 mb-2">
            C.V Raman Global University • 2021 – 2025
          </div>
          <p className="text-sm font-medium italic text-muted-foreground/60 leading-relaxed mb-0">
            Relevant: Software Testing, Database Systems, DSA, Web Technologies
          </p>
        </div>
      </div>
    </section>
  );
}
