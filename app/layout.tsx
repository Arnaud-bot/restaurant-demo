/**
 * Root Layout – Wraps every page with fonts, metadata, and global styles.
 * Next.js App Router: layout.tsx is the root shell; children are the current route's page.
 */
import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

/** Google Fonts via next/font: Lora (serif) for headings. Subsets/weights reduce bundle size. */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

/** Poppins (sans-serif) for body text. Variable exposes --font-poppins for Tailwind. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

/**
 * SEO & social metadata. Used for <head> (title, description, og:, twitter:).
 * metadataBase: base URL for resolving relative image paths in Open Graph.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://luma-dubai.vercel.app"),
  title: {
    default: "LUMA Dubai - Contemporary Mediterranean Restaurant",
    template: "%s | LUMA Dubai",
  },
  description:
    "LUMA brings contemporary Mediterranean dining to Dubai — seasonal ingredients, an open kitchen, and a dining room built for long, unhurried evenings. Reserve a table online.",
  keywords: [
    "restaurant",
    "Dubai restaurant",
    "Mediterranean food",
    "dining",
    "LUMA Dubai",
    "restaurant website",
    "food menu",
    "book table",
    "restaurant reservation",
    "fine dining",
    "gourmet food",
    "restaurant menu",
    "online reservation",
    "restaurant booking",
  ],
  authors: [
    {
      name: "Arnaud Malanda",
      url: "https://arnaudmalanda.com",
    },
  ],
  other: {
    "application-name": "LUMA Dubai",
    "apple-mobile-web-app-title": "LUMA Dubai",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#e5e5e5",
  },
  creator: "Arnaud Malanda",
  publisher: "Arnaud Malanda",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luma-dubai.vercel.app",
    siteName: "LUMA Dubai",
    title: "LUMA Dubai - Contemporary Mediterranean Restaurant",
    description:
      "LUMA brings contemporary Mediterranean dining to Dubai. Reserve a table online.",
    images: [
      {
        url: "/hero/plate.png",
        width: 756,
        height: 682,
        alt: "LUMA Dubai - Contemporary Mediterranean Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMA Dubai - Contemporary Mediterranean Restaurant",
    description:
      "LUMA brings contemporary Mediterranean dining to Dubai. Reserve a table online.",
    images: ["/hero/plate.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "restaurant",
};

/** Root layout: html/body get font CSS vars and background so first paint avoids white flash. */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ backgroundColor: "#e5e5e5" }}>
      <body className={`${lora.variable} ${poppins.variable}`} style={{ backgroundColor: "#e5e5e5" }}>{children}</body>
    </html>
  );
}
