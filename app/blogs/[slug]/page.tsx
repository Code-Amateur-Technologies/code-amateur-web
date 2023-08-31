"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface IBlog {
  description: string;
  author: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const linkTitle = params?.slug
  const [blogData, setBlogData] = useState<IBlog>({
    description: "",
    author: "",
    pubDate: "",
    thumbnail: "",
    title: "",
  });
  
  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alekrumkamp`;
    const { data } = await axios.get(Link);
    const { items } = data;
    // console.log("Array",items);
    items.map((blog: any) =>
      blog.title.replace(/ /g, '-') === linkTitle ? setBlogData(blog) : ""
    );
  };
  const date: any = blogData.pubDate.split(" ");
  console.log("Params:", params?.slug)

  return (
    <div>
      <section className="h-full py-8 px-4 sm:p-20 border-b flex-between">
        <h1 className="w-1/2 text-6xl font-medium text-gunmetal">
          {blogData.title}
        </h1>
      </section>
      <section className="px-20">
        <div className="py-10 flex gap-5 text-xl font-bold text-gunmetal">
          <p>Author: {blogData.author}</p>
          <p>Date: {date[0]}</p>
        </div>
        <div>
        <div className="text-xl" dangerouslySetInnerHTML={{ __html: blogData.description }} />
        </div>
        {/* <p className="text-xl">{shortenDescription(blogData?.description)}</p> */}
      </section>
    </div>
  );
}
