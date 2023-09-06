import { GetArticle } from "@/components/blogs/GetBlogs";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await GetArticle(params?.slug);

  return {
    metadataBase: new URL("https://codeamateur.netlify.app/blogs/"),
    title: "Code Amateur | Blog: " + article?.title,
    description: article?.title,
    openGraph: {
      title: article?.title,
      description: article?.title,
      siteName: "CAT",
      images: article?.thumbnail,
      type: "website",
    },
  };
}

interface IBlog {
  description: string;
  author: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const article = await GetArticle(params?.slug);
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const clean = purify.sanitize(article?.description);
  const date: any = article?.pubDate.split(" ");

  return (
    <div>
      <section className="h-full py-8 px-4 sm:p-20 border-b flex-between">
        <h1 className="w-1/2 text-6xl font-medium text-gunmetal">
          {article?.title}
        </h1>
      </section>
      <section className="px-20">
        <div className="py-10 flex gap-5 text-xl font-bold text-gunmetal">
          <p>Author: {article?.author}</p>
          <p>Date: {date[0]}</p>
        </div>
        <div>
          <div
            className="text-xl"
            dangerouslySetInnerHTML={{ __html: clean }}
          />
        </div>
        <div className="py-10 flex gap-2">
          {article?.categories.map((items: any) => (
            <div key={items} className="blog-category-chip">
              {items}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
