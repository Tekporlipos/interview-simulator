import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interview Simulator - Dashboard",
  applicationName: "Interview Simulator",
  description:
      "Boost your interview skills with InterviewSimulator. Experience lifelike interview scenarios and get personalized feedback to improve how you communicate and solve problems. Tailored for different jobs, it builds confidence and helps you succeed in interviews.",
  keywords: [
    "Interview Simulation",
    "GenieAIBuilder",
    "online platform",
    "website builder",
    "mock interview preparation",
    "CV creation",
    "application building",
  ],
  authors: {
    name: "John Dzikunu",
    url: "https://www.linkedin.com/in/john-dzikunu-23b838134/",
  },
  robots: "index, follow",
  creator: "TekporConsult",
  publisher: "TekporConsult",
  openGraph: {
    type: "website",
    url: "https://www.interviewsimulator.org",
    title: "Interview Simulation",
    description:
      "Interview simulation is a valuable tool offered by GenieAIBuilder, providing individuals and professionals with a realistic and immersive practice environment. Using advanced algorithms and an intuitive chat-based interface, our platform replicates real-world interview scenarios to help users refine their skills.",
    siteName: "Interview Simulation",
    images: [
      {
        url: "https://www.interviewsimulator.org/preview.jpeg",
      },
      {
        url: "https://www.interviewsimulator.org/logo.jpeg",
      },
      {
        url: "https://www.interviewsimulator.org/template-2.png",
      },
      {
        url: "https://www.interviewsimulator.org/template-3.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="__next" className={inter.className + " bg-dark-c"}>
        {children}
      </body>
    </html>
  );
}
