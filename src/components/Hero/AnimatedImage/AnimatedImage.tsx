'use client';
import { m } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function AnimatedImage({ children }: Props) {
  return (
    <>
      <div className={'my-auto relative h-fit z-[-1]'}>
        <m.div
          className={'main--image__card'}
          animate={{ rotate: [-30, -45, -30] }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity
          }}
        />

        <div
          className={
            ' m-auto relative overflow-hidden rounded-3xl drop-shadow-3xl  '
          }
        >
          <div className={'main--image__background'} />

          <m.div
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity
            }}
          >
            {children}
          </m.div>
        </div>
      </div>
    </>
  );
}
