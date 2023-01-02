'use client';
import { m } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const variantsBackground = {
  hidden: {
    rotate: -45
  },
  visible: {
    rotate: [-30, -45, -30],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity
    }
  }
};
const variantsInnerBg = {
  hidden: {
    x: -10
  },
  visible: {
    x: [0, -10, 0],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity
    }
  }
};

export default function AnimatedImage({ children }: Props) {
  return (
    <>
      <div className={'my-auto relative h-fit z-[-1]'}>
        <m.div
          className={'main--image__card'}
          variants={variantsBackground}
          initial={'hidden'}
          whileInView={'visible'}
        />

        <div
          className={
            ' m-auto relative overflow-hidden rounded-3xl drop-shadow-3xl  '
          }
        >
          <div className={'main--image__background'} />

          <m.div
            variants={variantsInnerBg}
            initial={'hidden'}
            whileInView={'visible'}
          >
            {children}
          </m.div>
        </div>
      </div>
    </>
  );
}
