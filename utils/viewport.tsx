import { useState, useEffect, useCallback } from "react";

function useIsInViewport(ref: any) {
  const [isInViewport, setIsInViewport] = useState(false);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      setIsInViewport(top >= 0 && bottom <= window.innerHeight);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, handleScroll]);

  return isInViewport;
}

export default useIsInViewport;
