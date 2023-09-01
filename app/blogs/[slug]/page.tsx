// import axios from "axios";
import slugify from "react-slugify";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { GetBlogs } from "@/utils/GetBlogs";
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  { params }: {
    params: { slug: string };
  },
): Promise<Metadata> {
  // read route params
  const linkTitle = params?.slug;
  let metaTitle: string = ""
  const data = await GetBlogs()
  data.map((blog: any) =>
    slugify(blog.title) === linkTitle ? metaTitle = blog.title : ""
  );
 
  return {
    title: "Code Amateur | Blog: " + metaTitle ,
  }
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
  const linkTitle = params?.slug;
  const blogs = await GetBlogs();
  let blogArray: any = [];
  blogs.map((blog: any) =>
    slugify(blog.title) === linkTitle ? blogArray.push({ ...blog }) : ""
  );
  console.log("Tarun-Blogs: ", blogArray[0].title);
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const clean = purify.sanitize(blogArray[0].description);
  // const blogContent = DOMPurify.sanitize(blogArray[0].description);
  const date: any = blogArray[0].pubDate.split(" ");

  // const [blogData, setBlogData] = useState<IBlog>({
  //   description: "",
  //   author: "",
  //   pubDate: "",
  //   thumbnail: "",
  //   title: "",
  // });
  // var slugify = require('slugify')
  // // const URL = slugify(props.title)

  // useEffect(() => {
  //   fetchBlog();
  // }, []);

  // const fetchBlog = async () => {
  //   const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alekrumkamp`;
  //   const { data } = await axios.get(Link);
  //   const { items } = data;
  //   // console.log("Array",items);
  //   items.map((blog: any) =>
  //   slugify(blog.title) === linkTitle ? setBlogData(blog) : ""
  //   );
  // };

  return (
    <div>
      <section className="h-full py-8 px-4 sm:p-20 border-b flex-between">
        <h1 className="w-1/2 text-6xl font-medium text-gunmetal">
          {blogArray[0].title}
        </h1>
      </section>
      <section className="px-20">
        <div className="py-10 flex gap-5 text-xl font-bold text-gunmetal">
          <p>Author: {blogArray[0].author}</p>
          <p>Date: {date[0]}</p>
        </div>
        <div>
          <div className="text-xl" dangerouslySetInnerHTML={{ __html: clean }} />
        </div>
        <div className="py-10 flex gap-2">
          {blogArray[0].categories.map((items: any) => (
            <div key={items} className="blog-category-chip">
              {items}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
