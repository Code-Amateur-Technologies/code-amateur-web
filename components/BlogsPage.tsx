import BlogCard from "@/components/BlogCard";
import { Key } from "react";
import { GetBlogs } from "@/utils/GetBlogs";

export default async function BlogsPage() {
  const blogs = await GetBlogs();

  return (
    <div>
      {blogs.length === 0 ? (
        <div className="h-96 flex-center text-4xl sm:text-8xl font-medium text-center text-gunmetal">
          coming soon...
        </div>
      ) : (
        <section className="py-8 px-4 sm:px-20 blogs-list">
          {blogs?.map((blog: any, index: Key) => (
            <BlogCard {...blog} key={index} />
          ))}
        </section>
      )}
    </div>
  );
}
