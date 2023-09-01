import BlogCard from "@/components/BlogCard";
import { Key } from "react";

export default async function BlogsPage() {
  const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alekrumkamp`;
  const blogs = await fetch(Link)
    .then((response) => response.json())
    .then((data) => {
      return data.items;
    })
    .catch((error) => console.log(error));

  return (
    <div>
      <section className="blogs-list">
        {blogs.map((blog: any, index: Key) => (
          <BlogCard {...blog} key={index} />
        ))}
      </section>
    </div>
  );
}
