import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const siteUrl = "https://chillspotdiani.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chillspot Diani | Beach Restaurant & Lounge",
    template: "%s | Chillspot Diani",
  },
  description:
    "Chillspot Diani is a beach-inspired restaurant and lounge experience offering great food, drinks, and relaxed coastal hospitality in Diani.",
  keywords: [
    "Chillspot Diani",
    "Diani restaurant",
    "beach lounge",
    "coastal dining",
    "Diani beach",
    "restaurant in Diani",
  ],
  alternates: {
    canonical: siteUrl,
  },
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
    title: "Chillspot Diani | Beach Restaurant & Lounge",
    description:
      "A relaxed beachside destination for food, drinks, and memorable coastal moments in Diani.",
    url: siteUrl,
    siteName: "Chillspot Diani",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Chillspot Diani beachfront view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chillspot Diani | Beach Restaurant & Lounge",
    description:
      "A relaxed beachside destination for food, drinks, and memorable coastal moments in Diani.",
    images: ["/images/hero.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "any" },
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
      <body className="bg-white text-[#1f1f1f] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
