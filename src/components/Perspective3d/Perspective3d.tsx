'use client';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

type Props = {
  children: ReactNode;
  width: number;
  height: number;
};

export default function Perspective3d({ children, height, width }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  /*  const [[widthCont, heightCont], setContainer] = useState([0, 0]);*/
  const x = useMotionValue(width / 2);
  const y = useMotionValue(height / 2);

  /*  const setupElement = useCallback(() => {
    if (!elementRef?.current) return;
    const { width, height } = elementRef.current.getBoundingClientRect();
    setContainer([width, height]);
    x.set(widthCont / 2);
    y.set(heightCont / 2);
  }, [widthCont, heightCont, x, y]);
  useEffect(() => setupElement(), [setupElement]);*/

  function handlePosition(e: React.MouseEvent<HTMLDivElement>) {
    const { clientY, clientX } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }
  function handleLeave() {
    x.set(width / 2);
    y.set(height / 2);
  }

  const rotateX = useTransform(y, [0, height], [10, -10]);
  const rotateY = useTransform(x, [0, width], [-10, 10]);

  return (
    <motion.div
      onMouseMove={handlePosition}
      onMouseLeave={handleLeave}
      className={'perspective-3d mx-auto w-full'}
      style={{
        maxWidth: width,
        maxHeight: height
      }}
    >
      <motion.div
        ref={elementRef}
        style={{
          rotateX,
          rotateY
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        className={'transform-preserve w-full duration-500 ease-linear h-full'}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
