"use client";
import { useEffect, useRef, useState } from "react";
import useIsInViewport from "@/utils/viewport";
interface AboutBox {
  id: number;
  value: number;
  valueString: string;
  aboutText: string;
}

const aboutBox: AboutBox[] = [
  {
    id: 1,
    value: 100,
    valueString: "+",
    aboutText: "Compeleted projects",
  },
  {
    id: 2,
    value: 99,
    valueString: "%",
    aboutText: "Success rate",
  },
  {
    id: 3,
    value: 50,
    valueString: "+",
    aboutText: "Team strength",
  },
];

const easeOutQuad = (t: any) => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({
  children,
  duration = 2000,
}: {
  children: any;
  duration: number;
}) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
};

export default function AboutCountBox() {
  const myElementRef = useRef(null);
  const [showCount, setShowCount] = useState<boolean>(false);
  const isInViewport = useIsInViewport(myElementRef);
  useEffect(() => {
    isInViewport && setShowCount(true);
  });

  return (
    <div ref={myElementRef} className="about-gridcontainer">
      {aboutBox.map((items) => (
        <div key={items.id} className="about-box">
          <div className="about-pill">
            {showCount && (
              <CountUpAnimation duration={1000}>{items.value}</CountUpAnimation>
            )}

            <p>{items.valueString}</p>
          </div>
          <p className="text-sm lg:text-2xl">{items.aboutText}</p>
        </div>
      ))}
    </div>
  );
}
