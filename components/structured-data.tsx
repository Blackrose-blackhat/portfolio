export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Musharaf Parwej",
    url: "https://musharaf.dev",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/Blackrose-blackhat",
      "https://linkedin.com/in/musharafparwej",
    ],
    description:
      "Full-stack engineer building production-grade tools across Web3, AI, and cloud-native ecosystems.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
