import type { Metadata } from "next";
import BlogsPage from "@/components/BlogsPage";

export const metadata: Metadata = {
  title: "Code Amateur" + " | " + "Blogs",
  description: "Read latest blogs published by our team here",
};

export default function Blogs() {

  return (
    <div className="py-8 px-4 sm:px-20">
      <BlogsPage/>
    </div>
  );
}
