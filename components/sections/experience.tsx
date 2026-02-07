export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Quranium",
      location: "Remote",
      period: "Apr 2025 – Present",
      current: true,
      achievements: [
        "Integrated 4+ smart contracts into a live DEX product, enabling secure swaps and liquidity pooling",
        "Collaborated across backend/frontend teams to ensure seamless API integration and app performance",
        "Optimized front-end data fetches, reducing latency by 30%",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company: "Claw Enterprises",
      location: "Remote",
      period: "July 2024 – Sep 2024",
      current: false,
      achievements: [
        "Led the redesign of an AI-integrated courtroom platform using React.js and TailwindCSS",
        "Implemented responsive UI and smart UX features across all major screen sizes",
        "Integrated Redux Toolkit to manage complex state and data synchronization",
      ],
    },
    {
      title: "Web Develoepr Intern",
      company: "Matlync Services",
      location: "Remote",
      period: "Nov 2023 - Dec 2023",
      achievements: [
        "Integrated PoucDB for in browser storage",
        "Implemented Electronjs + vitejs to make desktop application",
      ],
    },
  ];

  return (
    <section id="experience" className="mb-0">
      <h2 className="text-xl font-bold border-b border-border/10 pb-2 mb-6">
        Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-foreground mt-0 mb-0">
                  {exp.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-base font-semibold text-muted-foreground/90">
                {exp.company}
                {exp.current && (
                  <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 bg-primary/10 text-primary/80 rounded-sm">
                    Current
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1">
              {exp.achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="text-[15px] leading-relaxed opacity-80 flex items-start gap-1.5"
                >
                  <span className="text-muted-foreground/40 font-mono mt-0.5">
                    #
                  </span>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
