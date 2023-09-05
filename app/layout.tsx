import "@/styles/globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://codeamateur.com/"),
  title: "Code Amateur | Home : Crafting Mobile and Web Excellence",
  description:
    "Smart solutions are at the core of all that we do at Code Amateur Technologies. Our main goal is to find smart ways of using technology that will help build a better tomorrow for everyone, everywhere. We work with the latest technologies for building mobile and web app development",
  openGraph: {
    title: "Code Amateur | Crafting Mobile and Web Excellence",
    description:
      "Smart solutions are at the core of all that we do at Code Amateur Technologies. Our main goal is to find smart ways of using technology that will help build a better tomorrow for everyone, everywhere. We work with the latest technologies for building mobile and web app development",
    siteName: "CAT",
    images: "/opengraph-image.png",
    type: "website",
  },
  alternates: {
    canonical: "https://codeamateur.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
