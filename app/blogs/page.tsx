"use client";
import axios from "axios";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/`;
    const { data } = await axios.get(Link);
    const { items } = data;
    console.log(items);
    setBlogs(items);
  };

  return (
    <div className="py-8 px-4 sm:px-20">
      <h1 className="text-5xl text-center">Blogs</h1>
      <div className="blog-list">
        {blogs.map((list, index) => (
          <BlogCard list={list} key={index}/>
        ))}
      </div>
    </div>
  );
}
