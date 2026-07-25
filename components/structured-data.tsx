export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Musharaf Parwej",
    url: "https://musharraf.codes",
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://github.com/Blackrose-blackhat",
      "https://linkedin.com/in/mushraf-parwej",
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
