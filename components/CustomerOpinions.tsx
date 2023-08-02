"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import commentIcon from "@/public/assets/icons/customer_comment.svg";

interface Slide {
  id: number;
  text: string;
}

export default function CustomerOpinion() {
  const data: Slide[] = [
    {
      id: 1,
      text: "first Fermentum natoque semper suscipit vulputate phasellus nibh augue. Non pharetra quisque ligula inceptos magnis praesent rhoncus. Vehicula sem augue venenatis mollis torquent etiam ornare curae est dis.",
    },
    {
      id: 2,
      text: "second Elementum lacinia tempus vel praesent elit cubilia etiam aptent urna metus venenatis. Finibus dictum enim habitasse diam venenatis. Congue augue inceptos ornare neque dolor non pulvinar ultricies.",
    },
    {
      id: 3,
      text: "third Consectetuer si ultrices nunc nostra metus dictum arcu ante facilisi eu. Sagittis conubia nunc odio vivamus dictum faucibus. Felis platea donec malesuada ut aliquam consequat vehicula sapien turpis.",
    },
    {
      id: 4,
      text: "fourth Egestas maximus mattis orci malesuada mollis sed morbi venenatis pede. Adipiscing non convallis nam torquent blandit quis. Hendrerit euismod condimentum lectus conubia vitae leo ultricies tortor nullam.",
    },
    {
      id: 5,
      text: "fifth Egestas molestie condimentum venenatis velit lacus inceptos class quis. Bibendum praesent eros ornare hac cubilia interdum egestas sociosqu volutpat lacus urna. Elit risus iaculis vivamus ipsum curabitur.",
    },
  ];
  const [current, setCurrent] = useState<number>(1);
  const [value, setValue] = useState<any>();
  const [previousValue, setPreviousValue] = useState<any>();
  const [nextValue, setNextValue] = useState<any>();

  useEffect(() => {
    setValue(data[current].text);

    current > 0
      ? setPreviousValue(data[current - 1].text)
      : setPreviousValue(data[data.length - 1].text);

    current === data.length - 1
      ? setNextValue(data[0].text)
      : setNextValue(data[current + 1].text);
  }, [current]);

  function previous() {
    current > 0 ? setCurrent(current - 1) : setCurrent(data.length - 1);
  }

  function next() {
    current === data.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }

  return (
    <div className="py-8 px-4 sm:p-20 bg-raisinblack">
      <p className="customeropinion-heading">Opinions of our customers</p>
      <div className="customeropinion-gridcontainer">
        <div className="p-12 bg-spacecadet rounded-3xl">
          <Image
            src={commentIcon}
            alt={""}
            width={50}
            height={50}
            className="pb-5"
          />
          <p>{previousValue}</p>
          <p className="pt-5">John Smith</p>
        </div>
        <div className="hidden md:block p-12 bg-spacecadet rounded-3xl">
          <Image
            src={commentIcon}
            alt={""}
            width={50}
            height={50}
            className="pb-5"
          />
          <p>{value}</p>
          <p className="pt-5">John Smith</p>
        </div>
        <div className="hidden lg:block p-12 bg-spacecadet rounded-3xl">
          <Image
            src={commentIcon}
            alt={""}
            width={50}
            height={50}
            className="pb-5"
          />
          <p>{nextValue}</p>
          <p className="pt-5">John Smith</p>
        </div>
      </div>
      <div className="flex justify-around sm:justify-start">
        <button onClick={previous} className="customeropinion-button sm:mx-4">
          <Image
            className="fill-white"
            src={"/assets/icons/arrow-left.svg"}
            alt={""}
            width={30}
            height={30}
          />
        </button>
        <button onClick={next} className="customeropinion-button mx-4">
          <Image
            className="fill-white"
            src={"/assets/icons/arrow-right.svg"}
            alt={""}
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
}
