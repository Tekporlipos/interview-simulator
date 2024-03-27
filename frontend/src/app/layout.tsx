import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Interview Simulator - Home",
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
      "Improving interview skills is effortless with InterviewSimulator's immersive tool – an interactive interview simulation. Our platform, driven by advanced algorithms and a user-friendly chat-based interface, recreates real-world scenarios, providing individuals and professionals with a lifelike practice environment to enhance their abilities. Enhance your interview preparedness with us.",
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
