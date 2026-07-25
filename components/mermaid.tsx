"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#1a1a1a",
    primaryTextColor: "#e8e8e8",
    primaryBorderColor: "#333",
    lineColor: "#555",
    secondaryColor: "#111",
    tertiaryColor: "#0a0a0a",
    background: "#000",
    mainBkg: "#1a1a1a",
    nodeBorder: "#333",
    clusterBkg: "#111",
    titleColor: "#e8e8e8",
    edgeLabelBackground: "#000",
  },
});

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      mermaid
        .render(`mermaid-${Date.now()}`, chart)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        })
        .catch(console.error);
    }
  }, [chart]);

  return <div ref={ref} className="my-8 overflow-x-auto" />;
}
