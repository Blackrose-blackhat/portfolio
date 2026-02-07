export function Achievements() {
  const awards = [
    {
      title: "1st Prize, Zerion Web3 Hackathon",
      description:
        "Secured the top position in a high-stakes Web3 hackathon organized by Zerion. Developed a decentralized protocol solution that was recognized for its utility and technical implementation.",
      link: "https://flexanon.vercel.app",
      period: "2024",
    },
  ];

  return (
    <section id="achievements" className="mb-0">
      <h2 className="text-xl font-bold border-b border-border/10 pb-2 mb-8">
        Achievements
      </h2>

      <div className="space-y-8 mb-10">
        {awards.map((award, index) => (
          <div key={index} className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-foreground m-0">
                {award.title}
              </h3>
              <span className="text-sm font-medium text-muted-foreground/40 tabular-nums">
                {award.period}
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground/80 mb-3">
              {award.description}
            </p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                className="text-xs font-medium text-foreground/40 hover:text-primary transition-colors no-underline flex items-center gap-1"
              >
                <span>{award.link.replace("https://", "")}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="text-[13px] text-muted-foreground/30 italic font-medium">
        More to line up... once I decide to touch grass again.
      </div>
    </section>
  );
}
