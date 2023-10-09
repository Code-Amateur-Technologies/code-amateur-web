"use client";
import slugify from "react-slugify";

const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://codeamateur.medium.com/feed&api_key=esqmehbyut9mfcvjyz1vflvypn9siuvharniofwz&order_by=pubDate&count=25`;

export function GetBlogs() {
  const mediumFeed = fetch(Link, { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => {
      return data.items;
    })
    .catch(() => {
      return [];
    });

  return mediumFeed;
}

export async function GetArticle(title: string) {
  const blogs = await GetBlogs();

  const article: any = blogs?.find(
    (blog: any) => slugify(blog.title) === title,
  );

  return article;
}
