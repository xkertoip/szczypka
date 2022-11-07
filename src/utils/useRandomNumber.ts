import { useEffect, useState, useCallback } from 'react';

type Props = {
  min: number;
  max: number;
};

export default function useRandomNumber({ min, max }: Props) {
  let randomNumber = useCallback(() => {
    return Math.floor(Math.random() * (max - min)) + min;
  }, [max, min]);
  let [[currentNumber, isClicked], setStatus] = useState([min, false]);

  const handleClick = (value: number) => {
    setStatus([value, true]);
  };

  useEffect(() => {
    setStatus([currentNumber, false]);
    const interval = setInterval(() => {
      setStatus([randomNumber(), false]);
      if (isClicked) {
        clearInterval(interval);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [randomNumber, isClicked, currentNumber]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus([randomNumber(), isClicked]);
    }, 4000);
    if (!isClicked) {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [isClicked, randomNumber]);

  return { currentNumber, handleClick };
}
