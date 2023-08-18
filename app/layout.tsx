import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Code Amateur we provide services regarding product strategies, UI and Ux development, front-end development, back-end development, Data analytics and Game development in Mohali",
  description: "Leading Technology company",
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
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
