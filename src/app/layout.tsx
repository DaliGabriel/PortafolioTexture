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
  title: "Gabriel Dalí Rangel | Frontend & Full-Stack Developer",
  description:
    "Experienced React & Next.js developer specializing in AI-powered apps, SEO-optimized websites, and interactive data visualizations. Explore my portfolio showcasing ImagenProAI, México Interactivo, and more.",
  keywords: [
    "React.js",
    "Next.js",
    "Frontend Developer",
    "Full-Stack Developer",
    "AI Applications",
    "SEO Optimization",
    "Web Development",
    "GraphQL",
    "Node.js",
    "Replicate API",
    "Portfolio",
    "Gabriel Dalí Rangel",
  ],
  openGraph: {
    title: "Gabriel Dalí Rangel | Frontend & Full-Stack Developer",
    description:
      "Explore my work in AI-driven image generation, interactive maps, and high-performance web applications.",
    url: "https://dalirangel.com",
    type: "website",
    images: [
      {
        url: "https://dalirangel.com/og-image.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Gabriel Dalí Rangel Portfolio",
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
