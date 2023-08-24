import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Code Amateur" + " | " + "we provide services regarding Product Strategies, UI and Ux Development, Front-end Development, Back-end Development, Data Analytics and Game Development",
  description: "Leading technology company for all your services needs",
  openGraph: {
    title: "Code Amateur" + " | " + "we provide services regarding Product Strategies, UI and Ux Development, Front-end Development, Back-end Development, Data Analytics and Game Development",
    description: "Unleashing Technological Excellence with Code Amateur Technologies",
    siteName: "CAT",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    type: 'website',
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
