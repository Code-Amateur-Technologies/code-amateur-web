"use client";
import { useEffect, useRef, useState } from "react";
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
  const targetRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        }
      });
    });
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef} className="about-gridcontainer">
      {aboutBox.map((items) => (
        <div key={items.id} className="about-box">
          <div className="about-pill">
            {isInViewport && (
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
