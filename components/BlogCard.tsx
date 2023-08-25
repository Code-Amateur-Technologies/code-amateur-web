import Link from "next/link";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogCard(props: {
  description: string;
  author: string;
  link: URL;
  pubDate: string;
  thumbnail: string;
  title: string;
}) {
  const shortenDescription = (description: string) => {
    description = description
      ?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")
      .substring(0, 60);

    description += "...";

    return description;
  };

  return (
    <Link
      href={{ pathname: `blogs/blog`, query: { title: props.title } }}
      className="blog-card"
    >
      <img src={props.thumbnail} alt={"Our blog on topic: " + props.title} className="w-full h-[200px] rounded-t-3xl" />
      <div className="p-4">
        <h1 className="text-xl font-medium">{props.title}</h1>
        <p className="my-5">{shortenDescription(props.description)}</p>
        <div className="my-2 flex items-center">
          <FontAwesomeIcon icon={faUser} size="xs" />
          <p className="ml-2 text-sm font-medium">{props.author}</p>
        </div>
        <div className="my-2 flex items-center">
          <FontAwesomeIcon icon={faCalendarDays} size="xs" />
          <p className="ml-2 text-sm">{props.pubDate}</p>
        </div>
      </div>
    </Link>
  );
}
