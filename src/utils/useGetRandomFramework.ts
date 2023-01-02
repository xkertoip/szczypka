import { useEffect, useState, useCallback, useRef, RefObject } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  array: any[];
  max: number;
  container: RefObject<HTMLDivElement>;
};

export default function useGetRandomFramework({
  array,
  max,
  container
}: Props) {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInView = useInView(container);
  const getRandomFramework = useCallback(() => {
    return array[Math.floor(Math.random() * max)];
  }, [max, array]);
  const [currentFramework, setCurrentFramework] = useState(array[0]);

  const handleRandom = useCallback(() => {
    setCurrentFramework(getRandomFramework());
  }, [getRandomFramework]);
  const findFrameworkByUniqueNumber = useCallback(
    (value: number) => {
      return array.find(element => element.uniqueNumber === value);
    },
    [array]
  );
  const handleClick = useCallback(
    (value: number) => {
      setCurrentFramework(findFrameworkByUniqueNumber(value));
      timer.current && clearInterval(timer.current);
      timer.current = setInterval(() => {
        handleRandom();
      }, 3000);
    },
    [findFrameworkByUniqueNumber, handleRandom]
  );

  useEffect(() => {
    if (!isInView) {
      return;
    } else {
      timer.current = setInterval(() => {
        handleRandom();
      }, 3000);
    }

    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, [handleRandom, isInView]);

  return { currentFramework, handleClick };
}
