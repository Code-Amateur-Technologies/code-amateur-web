import type { Metadata } from "next";
import BlogsPage from "@/components/BlogsPage";

export const metadata: Metadata = {
  title: "Code Amateur | Blogs",
  description: "Read latest blogs published by our team here",
};

export default function Blogs() {
  return <BlogsPage />;
}
