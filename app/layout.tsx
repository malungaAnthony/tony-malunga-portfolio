import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Tony Malunga | The Designer",
  description: "Creative Front-End Developer & Visual Storyteller based in Lusaka. Crafting cinematic digital experiences with imagination and precision.",
  keywords: ["Tony Malunga", "Front End Developer", "Web Designer", "UI/UX", "Lusaka", "Portfolio"],
  authors: [{ name: "Tony Malunga" }],
  openGraph: {
    title: "Tony Malunga | The Designer",
    description: "Creative Front-End Developer & Visual Storyteller",
    images: [
      {
        url: "/tony-hero.png", // Make sure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Tony Malunga - The Designer",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}