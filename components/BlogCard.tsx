import Link from "next/link";
import slugify from 'react-slugify';
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogCard(props: {
  title: string;
  pubDate: string;
  thumbnail: string;
  link: string;
  description: string;
  author: string;
  categories: string[];
}) {
  const URL = slugify(props.title);
  const shortenDescription = (description: string) => {
    description = description
      ?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")
      .substring(0, 60);

    description += "...";

    return description;
  };
  const date = props.pubDate.split(" ");

  return (
    <Link href={props.link} target="_blank" className="blog-card">
      <img
        src={props.thumbnail}
        alt={props.title}
        className="w-full h-[200px] rounded-t-3xl"
      />
      <div className="p-4 text-gunmetal">
        <h1 className="text-xl font-medium">{props.title}</h1>
        <p className="my-5">{shortenDescription(props.description)}</p>
        <div className="my-2 flex items-center">
          <FontAwesomeIcon icon={faUser} size="xs" />
          <p className="ml-2 text-sm font-medium">{props.author}</p>
        </div>
        <div className="my-2 flex items-center">
          <FontAwesomeIcon icon={faCalendarDays} size="xs" />
          <p className="ml-2 text-sm">{date[0]}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.categories.map((items) => (
            <div key={items} className="blog-category-chip">
              {items}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
