'use client';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';
type Props = {
  children: ReactNode;
};

const variants = {
  initial: {
    x: 0
  },
  animate: {
    x: '-100%'
  }
};

export default function InfiniteLoop({ children }: Props) {
  const [loopElement, setLoopElement] = useState(1);
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
          className={'flex justify-center w-fit border-b border-indigo-400'}
        >
          {[...Array(loopElement)].map((_, index) => (
            <m.div
              key={index}
              className={'flex w-max'}
              variants={variants}
              initial={'initial'}
              animate={'animate'}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {children}
            </m.div>
          ))}
        </div>
      </div>
    </>
  );
}
