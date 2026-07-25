import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Freelance Web Developer in Jharkhand";
const pageDescription =
  "Freelance web developer helping businesses in Jharkhand launch fast, conversion-focused websites and custom web apps from Ranchi to Jamshedpur, Dhanbad, and Bokaro.";
const pageUrl =
  "https://musharraf.codes/freelance/web-developer-jharkhand";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "freelance web developer in Jharkhand",
    "web developer in Jharkhand",
    "website developer in Ranchi",
    "website designer in Jharkhand",
    "freelance developer Ranchi",
  ],
  alternates: {
    canonical: "/freelance/web-developer-jharkhand",
  },
  openGraph: {
    title: `${pageTitle} | Musharaf Parwej`,
    description: pageDescription,
    url: pageUrl,
    type: "article",
  },
  twitter: {
    title: `${pageTitle} | Musharaf Parwej`,
    description: pageDescription,
  },
};

const services = [
  "Business websites built with Next.js and TypeScript",
  "Landing pages optimized for speed, SEO, and lead generation",
  "Custom dashboards, portals, and internal tools",
  "Technical audits, performance fixes, and product iteration support",
];

const cities = ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"];

const faqs = [
  {
    question: "Do you work with clients across Jharkhand remotely?",
    answer:
      "Yes. I work remotely with founders, agencies, and local businesses across Jharkhand, sharing progress asynchronously and through scheduled calls when needed.",
  },
  {
    question: "What kinds of websites do you build for Jharkhand businesses?",
    answer:
      "I build marketing sites, service business websites, web apps, admin dashboards, and product landing pages designed to load fast and convert visitors into leads.",
  },
  {
    question: "Can you help improve an existing website instead of rebuilding it?",
    answer:
      "Yes. I can audit an existing site, improve performance, refresh the UI, tighten the SEO basics, and add new product or lead-generation flows.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      areaServed: [
        {
          "@type": "State",
          name: "Jharkhand",
        },
        ...cities.map((city) => ({
          "@type": "City",
          name: city,
        })),
      ],
      provider: {
        "@type": "Person",
        name: "Musharaf Parwej",
        url: "https://musharraf.codes",
      },
      serviceType: [
        "Freelance web development",
        "Website design and development",
        "Custom web application development",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function JharkhandFreelancePage() {
  return (
    <main className="bg-background min-h-screen selection:bg-muted-foreground/30">
      <div className="max-w-[720px] mx-auto px-6 py-12 sm:py-24 pb-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <header className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground/50 mb-4">
            Regional SEO landing page
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Freelance Web Developer in Jharkhand
          </h1>
          <p className="text-base text-muted-foreground/80 font-medium leading-relaxed">
            I help businesses in Jharkhand ship fast, modern websites and web
            apps that look credible, load quickly, and turn interest into
            conversations.
          </p>
        </header>

        <div className="space-y-14">
          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border/10 pb-2">
              What I build for Jharkhand businesses
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground/80">
              If you run a service business, agency, startup, or local brand in
              Jharkhand, I can help you launch a site that presents your offer
              clearly, ranks for the right searches, and supports your next
              stage of growth.
            </p>
            <div className="grid gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-lg border border-border/10 px-4 py-3 text-[15px] text-muted-foreground/85"
                >
                  {service}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border/10 pb-2">
              Why clients choose to work with me
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground/80">
              <p>
                I focus on practical outcomes: cleaner user journeys, stronger
                performance, and shipping work that is production-ready instead
                of prototype-only.
              </p>
              <p>
                My background covers full-stack product development, which means
                I can handle both polished marketing sites and more complex
                application flows when your business needs them.
              </p>
              <p>
                I work remotely and clearly, so businesses in Jharkhand can get
                reliable engineering support without needing a fake local office
                claim or an oversized agency setup.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border/10 pb-2">
              Cities I serve
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground/80">
              I support clients across Jharkhand, including teams in Ranchi,
              Jamshedpur, Dhanbad, and Bokaro.
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="text-[11px] font-mono text-muted-foreground/50 uppercase tracking-widest px-2.5 py-1 border border-border/10 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border/10 pb-2">
              Relevant work
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground/80">
              <p>
                My freelance work includes production websites, internal tools,
                and SEO-oriented landing pages like this one, where I
                implemented ranking logic focused on Jharkhand searches. You
                can explore a broader set of case studies and shipped work on
                the portfolio pages below.
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-sm">
                <Link
                  href="/freelance"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  freelance overview →
                </Link>
                <Link
                  href="/work"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  selected work →
                </Link>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border/10 pb-2">
              FAQ
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground/80">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border/10 px-6 py-6 bg-muted/20">
            <h2 className="text-xl font-bold mb-3">
              Need a website or web app for your business in Jharkhand?
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground/80 mb-5">
              If you want a fast site, a cleaner conversion flow, or a custom
              product interface, I’d be happy to talk through the project.
            </p>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a
                href="mailto:mushrafparwej@gmail.com"
                className="text-foreground hover:text-foreground/70 transition-colors"
              >
                email me
              </a>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                back to homepage
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
