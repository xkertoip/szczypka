import { useEffect, useState, useCallback, useRef } from 'react';

type Props = {
  array: any[];
  max: number;
};

export default function useGetRandomFramework({ array, max }: Props) {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
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
      }, 4000);
    },
    [findFrameworkByUniqueNumber, handleRandom]
  );

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
