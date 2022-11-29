'use client';
import { useMotionValue, useTransform, m } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  width: number;
  height: number;
};

export default function Perspective3d({ children, height, width }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(width / 2);
  const y = useMotionValue(height / 2);

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
    <m.div
      onMouseMove={handlePosition}
      onMouseLeave={handleLeave}
      className={'perspective-3d mx-auto w-full'}
      style={{
        maxWidth: width,
        maxHeight: height
      }}
    >
      <m.div
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
      </m.div>
    </m.div>
  );
}
