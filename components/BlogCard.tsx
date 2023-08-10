import Link from "next/link";
import Image from "next/image";
import { ProfileIcon, CalenderIcon } from "@/utils/Icons";

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
      <div className="w-full">
        <img
          src={props.list.thumbnail}
          alt={""}
          width={400}
          height={200}
          className="w-full rounded-t-3xl object-contain"
        />
      </div>
      <div className="-my-[25px] ml-5 rounded-full inherit bg-white">
        <Image
          src={"/assets/images/default_profile.png"}
          alt={""}
          width={50}
          height={50}
          className="border-2 border-white rounded-full"
        />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-medium">{props.list.title}</h1>
        <p className="my-5">{shortenDescription(props.list.description)}</p>
        <div className="my-2 flex items-center">
          <ProfileIcon />
          <p className="text-xs font-medium">{props.list.author}</p>
        </div>
        <div className="my-2 flex items-center">
          <CalenderIcon />
          <p className="text-xs">{props.list.pubDate}</p>
        </div>
      </div>
    </Link>
  );
}
