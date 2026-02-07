"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GitHubContributionGraph() {
  const theme = {
    dark: ["#111111", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const selectLastMonths = (data: any[]) => {
    return data.slice(-310); // Show last 20 weeks
  };

  return (
    <section id="github-activity" className="mb-0">
      <h2 className="text-xl font-bold border-b border-border/10 pb-2 mb-8">
        GitHub Activity
      </h2>

      <div className="relative w-full overflow-hidden no-scrollbar opacity-90 hover:opacity-100 transition-opacity">
        <div className="flex justify-start">
          <GitHubCalendar
            username="Blackrose-blackhat"
            blockSize={11}
            blockMargin={4}
            fontSize={12}
            theme={theme}
            colorScheme="dark"
            hideColorLegend
            hideTotalCount
            transformData={selectLastMonths}
          />
        </div>
      </div>

      <div className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/20">
        Activity Archive
      </div>
    </section>
  );
}
