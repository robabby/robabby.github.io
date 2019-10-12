import { useState, useEffect, useCallback } from "react";

export default () => {
  const { innerWidth, innerHeight } = window;

  const getSize = useCallback(() => {
    return {
      width: innerWidth,
      height: innerHeight
    };
  }, [innerWidth, innerHeight]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
