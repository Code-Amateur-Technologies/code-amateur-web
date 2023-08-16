import Link from "next/link";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogCard(props: {
  list: {
    description: string;
    author: string;
    link: URL;
    pubDate: string;
    thumbnail: string;
    title: string;
  };
}) {
  const shortenDescription = (description: string) => {
    const defaultContinue = " Continue reading on Medium »";
    description = description
      ?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")
      .substring(0, 60);

    if (description.length <= 60 - defaultContinue.length) {
      description += defaultContinue;
    }
    description += "...";

    return description;
  };

  return (
    <Link href={props.list.link} className="blog-card">
      <img
        src={props.list.thumbnail}
        className="w-full h-[200px] rounded-t-3xl"
      />
      <div className="p-4">
        <h1 className="text-xl font-medium">{props.list.title}</h1>
        <p className="my-5">{shortenDescription(props.list.description)}</p>
        <div className="my-2 flex items-center">
          <FontAwesomeIcon icon={faUser} size="xs" />
          <p className="ml-2 text-sm font-medium">{props.list.author}</p>
        </div>
        <div className="my-2 flex items-center">
          <FontAwesomeIcon icon={faCalendarDays} size="xs" />
          <p className="ml-2 text-sm">{props.list.pubDate}</p>
        </div>
      </div>
    </Link>
  );
}
