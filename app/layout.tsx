import type React from "react";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Musharaf Parwej",
    template: "%s | Musharaf Parwej",
  },
  description:
    "Full-stack engineer building production-grade tools across Web3, AI, and cloud-native ecosystems.",
  keywords: [
    "Musharaf Parwej",
    "Full-stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Go",
    "TypeScript",
    "AI",
    "Web3",
  ],
  authors: [{ name: "Musharaf Parwej" }],
  creator: "Musharaf Parwej",
  metadataBase: new URL("https://musharraf.codes"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musharraf.codes",
    title: "Musharaf Parwej",
    description:
      "Full-stack engineer building production-grade tools across Web3, AI, and cloud-native ecosystems.",
    siteName: "Musharaf Parwej Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musharaf Parwej",
    description:
      "Full-stack engineer building production-grade tools across Web3, AI, and cloud-native ecosystems.",
    creator: "@musharafparwej",
  },
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Musharaf-parwej",
};

import { Navbar } from "@/components/navbar";
import { StructuredData } from "@/components/structured-data";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
