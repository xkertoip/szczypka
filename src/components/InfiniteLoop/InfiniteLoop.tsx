'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
};

export default function InfiniteLoop({ children }: Props) {
  let [loopElement, setLoopElement] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  }

  const setupElement = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;
    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;
    const elementWidth = width / innerRef.current.children.length;
    if (widthDeficit) {
      setLoopElement(loopElement + Math.ceil(widthDeficit / elementWidth) + 1);
    }
    resetAnimation();
  }, [loopElement]);

  useEffect(() => setupElement(), [setupElement]);

  return (
    <>
      <div ref={outerRef} className={'w-full overflow-hidden'}>
        <div
          ref={innerRef}
          className={'flex justify-center w-fit looper__innerList'}
        >
          {[...Array(loopElement)].map((_, index) => (
            <div
              key={index}
              className={'flex w-max animate-none looper__listInstance'}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
