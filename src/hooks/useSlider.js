import { useEffect, useRef, useState } from "react";

export const useSlider = () => {
  const [childWidth, setChildWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef();
  const itemRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      let child = containerRef.current.children[0];

      let childStyles = getComputedStyle(child);

      let width =
        child.clientWidth + Number(childStyles.marginRight.split("px")[0]);

      setChildWidth(width);
    }
  }, []);

  useEffect(() => {
    let translateWidth = childWidth * 2 * activeIndex;

    doTransition(translateWidth);
  }, [activeIndex]);

  const changeIndex = (ind) => {
    setActiveIndex(ind);
  };

  const doTransition = (translateWidth) => {
    containerRef.current.style.transform = `translateX(-${translateWidth}px)`;
  };

  return { containerRef, itemRef, activeIndex, changeIndex };
};
