import type { Metadata } from "next";
import BlogsPage from "@/components/BlogsPage";

export const metadata: Metadata = {
  title: "Code Amateur | Blogs",
};

export default function Blogs() {

  return (
      <BlogsPage/>
  );
}
