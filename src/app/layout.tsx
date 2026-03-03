import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Dalí Rangel | Senior Full-Stack Engineer · Laravel + AWS",
  description:
    "Senior Full-Stack Engineer based in Mexico (CST). 4 years building production systems for fintech and e-commerce with Laravel, AWS, PostgreSQL, and React. Open to remote roles with US companies.",
  keywords: [
    "Laravel Developer",
    "PHP Developer",
    "Senior Backend Developer",
    "Full-Stack Engineer",
    "AWS",
    "PostgreSQL",
    "Docker",
    "Stripe Integration",
    "PayU Integration",
    "MySQL Optimization",
    "Redis",
    "Remote Backend Developer",
    "Nearshore Developer Mexico",
    "Gabriel Dalí Rangel",
  ],
  openGraph: {
    title: "Gabriel Dalí Rangel | Senior Full-Stack Engineer · Laravel + AWS",
    description:
      "4 years building scalable Laravel backends and e-commerce systems. AWS, Docker, Stripe/PayU, MySQL optimization. Available for remote work — CST timezone.",
    url: "https://dalirangel.com",
    type: "website",
    images: [
      {
        url: "https://dalirangel.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Dalí Rangel — Senior Laravel Backend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
