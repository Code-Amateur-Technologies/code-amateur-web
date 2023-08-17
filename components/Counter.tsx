"use client"
import { useEffect, useState } from "react";

export default function Counter (props: {value: number}) {
    const max = props.value
  const [count, setCount] = useState(0);
  useEffect(() => {
    const loop = setInterval(() => {
      count < max ? setCount(count + 1) : "";
    }, 20);
    return () => {
      clearInterval(loop);
    };
  }, [count]);
  return <p>{count}</p>;
};
