export function Experience() {
  const experiences = [
    {
      title: "Founding Engineer",
      company: "DueDraft AI",
      period: "Mar 2026 – Present",
      current: true,
      achievements: [
        "Built the end-to-end DueDraft.ai platform — AI-powered compliance tracking, document drafting, and due diligence for CA/CS firms",
        "Designed and shipped the compliance watcher engine that auto-maps deadlines from MCA21 and GSTN with WhatsApp/email alerts",
        "Architected multi-tenant infrastructure on AWS with role-based access, audit trails, and DPDPA-compliant data isolation",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Quranium",
      period: "Oct 2024 – Mar 2026",
      current: false,
      achievements: [
        "Integrated 4+ smart contracts into a live DEX product, enabling secure swaps and liquidity pooling",
        "Collaborated across backend/frontend teams to ensure seamless API integration and app performance",
        "Optimized front-end data fetches, reducing latency by 30%",
      ],
    },
  ];

  return (
    <section id="experience">
      <h2 className="font-mono text-sm text-muted-foreground mb-8">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {exp.title}
                  <span className="text-muted-foreground font-normal">
                    {" "}
                    — {exp.company}
                  </span>
                </h3>
              </div>
              <span className="font-mono text-xs text-muted-foreground/70 shrink-0">
                {exp.period}
              </span>
            </div>

            <div className="space-y-1.5 pl-0">
              {exp.achievements.map((achievement, i) => (
                <p
                  key={i}
                  className="text-[14px] leading-relaxed text-foreground/80"
                >
                  – {achievement}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
