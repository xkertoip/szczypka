'use client';
import { ReactNode } from 'react';
import { m } from 'framer-motion';

type Props = {
  children: ReactNode;
};
const variants = {
  hover: {
    scaleY: [1, 0.3, 2, 2, 1],
    scaleX: [1, 1, 0.3, 2, 1],
    transition: {
      duration: 0.7,
      ease: 'easeInOut'
    }
  }
};
export default function AnimatedLetter({ children }: Props) {
  return (
    <m.span
      variants={variants}
      whileHover={'hover'}
      className={'letter-animate'}
    >
      {children}
    </m.span>
  );
}
