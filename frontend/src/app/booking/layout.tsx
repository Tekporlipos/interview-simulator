import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interview Simulator - Interview Booking",
  applicationName: "Interview Simulator",
  description:
    "Boost your interview skills with InterviewSimulator. Experience lifelike interview scenarios and get personalized feedback to improve how you communicate and solve problems. Tailored for different jobs, it builds confidence and helps you succeed in interviews.",
  keywords: [
    "Interview Simulation",
    "InterviewSimulator",
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
      "InterviewSimulator offers a valuable interview simulation tool with advanced algorithms and an intuitive user-friendly interface. It provides a realistic and immersive practice environment, helping individuals and professionals refine their skills",
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
      <body className={inter.className + " bg-dark-c"}>{children}</body>
    </html>
  );
}
