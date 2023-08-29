"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

interface IBlog {
  description: string;
  author: string;
  link: URL;
  pubDate: string;
  thumbnail: string;
  title: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [blogData, setBlogData] = useState<IBlog>();
  const linkTitle: string | null = useSearchParams().get("title");

  useEffect(() => {
    linkTitle !== null && fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alekrumkamp`;
    const { data } = await axios.get(Link);
    const { items } = data;
    // console.log("Array",items);
    items.map((blog: any) => (blog.title === linkTitle ? setBlogData(blog) : ""))
  };

  const shortenDescription = (description: any) => {
    description = description
      ?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")

    return description;
  };
  // console.log("Title:", params?.slug)
  // console.log(linkTitle)

  return (
    <div>
      <section className="h-full py-8 px-4 sm:p-20 border-b flex-between">
        <h1 className="w-1/2 text-6xl font-medium text-gunmetal">{blogData?.title}</h1>
      </section>
      <section className="px-20">
        <div className="py-10 flex gap-5 text-xl font-bold text-gunmetal">
          <p>Author: {blogData?.author}</p>
          <p>Date: {blogData?.pubDate}</p>
        </div>
        <p className="text-xl">{shortenDescription(blogData?.description)}</p>
      </section>
    </div>
  );
}
