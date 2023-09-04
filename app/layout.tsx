import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://codeamateur.netlify.app/"),
  title: "Code Amateur" + " | Home : " + "Crafting Mobile and Web Excellence",
  description: "Leading technology company for all your services needs",
  openGraph: {
    title: "Code Amateur" + " | " + "Crafting Mobile and Web Excellence",
    description:
      "Unleashing Technological Excellence with Code Amateur Technologies",
    siteName: "CAT",
    images: "/opengraph-image.png",
    type: "website",
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
      </body>
    </html>
  );
}
