"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { RightArrow } from "@/utils/customIcons";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const index: string | null = useSearchParams().get("index");
  const blogId: number | null = +index;
  const storedData: any = JSON.parse(localStorage.getItem("blogData"));
  const title = params.slug.replaceAll("%20", " ");
  const content = storedData.blogs[blogId]?.content?.replace(
    /<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm,
    ""
  );

  return (
    <div>
      <section className="h-full py-8 px-4 sm:p-20 border-b flex-between">
        <h1 className="blog-heading w-1/2">{title}</h1>
        <Link href={""} className="dark-button gap-2">
          see on medium
          <RightArrow />
        </Link>
      </section>
      <section className="px-20">
        <div className="py-10 flex gap-5 text-xl font-bold text-gunmetal">
          <p>Author: {storedData.blogs[blogId]?.author}</p>
          <p>Date: {storedData.blogs[blogId]?.pubDate}</p>
        </div>
        <p className="text-xl">
          {content}
        </p>
      </section>
    </div>
  );
}
