import "@/styles/globals.css";
import type { Metadata } from "next";
import WebAnalytics from "./WebAnalytics";
import Header from "@/components/navigation/Header";
import Footer from "@/components/Footer";
import FreshChat from "./FreshChatBot";

export const metadata: Metadata = {
  metadataBase: new URL("https://codeamateur.com/"),
  title: "Code Amateur | Home : Crafting Mobile and Web Excellence",
  description:
    "Our goal is to find smart ways of using technology to help build a better tomorrow. We work with the latest technologies for building mobile and web apps.",
  openGraph: {
    title: "Code Amateur | Crafting Mobile and Web Excellence",
    description:
      "Our goal is to find smart ways of using technology to help build a better tomorrow. We work with the latest technologies for building mobile and web apps.",
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
      <FreshChat />
      <body className="w-full">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <WebAnalytics />
      </body>
    </html>
  );
}
