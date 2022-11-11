import { useEffect, useState, useCallback, useRef } from 'react';

type Props = {
  array: any[];
  max: number;
};

export default function useGetRandomFramework({ array, max }: Props) {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  let getRandomFramework = useCallback(() => {
    return array[Math.floor(Math.random() * max)];
  }, [max, array]);
  let [currentFramework, setCurrentFramework] = useState(array[0]);

  const handleRandom = useCallback(() => {
    setCurrentFramework(getRandomFramework());
  }, [getRandomFramework]);
  function findFrameworkByUniqueNumber(value: number) {
    return array.find(element => element.uniqueNumber === value);
  }

  const handleClick = (value: number) => {
    setCurrentFramework(findFrameworkByUniqueNumber(value));

    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => {
      handleRandom();
    }, 4000);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      handleRandom();
    }, 4000);

    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, [handleRandom]);

  return { currentFramework, handleClick };
}
