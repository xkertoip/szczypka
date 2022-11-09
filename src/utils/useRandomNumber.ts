import { useEffect, useState, useCallback, useRef } from 'react';

type Props = {
  min: number;
  max: number;
};

export default function useRandomNumber({ min, max }: Props) {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  let randomNumber = useCallback(() => {
    return Math.floor(Math.random() * (max - min)) + min;
  }, [max, min]);
  let [currentRandomNumber, setCurrentRandomNumber] = useState(randomNumber);

  const handleRandom = useCallback(() => {
    setCurrentRandomNumber(randomNumber());
  }, [randomNumber]);

  const handleClick = (value: number) => {
    setCurrentRandomNumber(value);
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

  return { currentRandomNumber, handleClick };
}
