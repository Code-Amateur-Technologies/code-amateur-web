"use client";
import axios from "axios";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@codeamateur`;
    const { data } = await axios.get(Link);
    const { items } = data;
    // console.log(items);
    setBlogs(items);
  };

  return (
    <div>
      <h1 className="text-5xl text-center">Blogs</h1>
      <div className="blog-list">
        {blogs.map((list, index) => (
          <BlogCard list={list} key={index}/>
        ))}
      </div>
    </div>
  );
}
