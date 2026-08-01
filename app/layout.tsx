import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RedFrame Studio",
    template: "%s | RedFrame Studio",
  },
  description:
    "RedFrame Studio is a creative digital agency specializing in modern web design, branding, UI/UX, and web development.",
  keywords: [
    "Design Agency",
    "Next.js",
    "Tailwind CSS",
    "UI UX",
    "Web Development",
    "Branding",
  ],
  authors: [{ name: "RedFrame Studio" }],
  creator: "RedFrame Studio",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}