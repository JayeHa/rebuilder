import { useEffect, useRef, useState } from "react";

export const useOptimizationSectionAnimation = () => {
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current && targetRef.current) {
        const elementA = elementRef.current as Element;
        const elementB = targetRef.current as Element;

        const elementAPos =
          elementA.getBoundingClientRect().bottom + window.scrollY;
        const elementBPos =
          elementB.getBoundingClientRect().top + window.scrollY;

        // 요소 A가 요소 B보다 화면상에서 아래에 위치할 때
        setIsActive(elementAPos > elementBPos ? true : false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { elementRef, targetRef, isActive };
};
