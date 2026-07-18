"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GitHubContributionGraph() {
  const theme = {
    dark: ["#111111", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const selectLastMonths = (data: any[]) => {
    return data.slice(-310);
  };

  return (
    <section id="github-activity">
      <h2 className="font-mono text-sm text-muted-foreground mb-8">
        GitHub Activity
      </h2>

      <div className="relative w-full overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
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
    </section>
  );
}
