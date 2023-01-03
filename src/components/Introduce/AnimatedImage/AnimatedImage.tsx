'use client';
import { ReactNode } from 'react';

import { m } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const variantsBackground = {
  hidden: {
    rotate: -10
  },
  visible: {
    rotate: [-15, -10, -15],
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
      <div className={'rotate-[15deg]'}>
        <div className={'relative h-fit z-[-1]'}>
          <m.div
            className={'section--image__card'}
            variants={variantsBackground}
            initial={'hidden'}
            whileInView={'visible'}
          />
          <div className={' m-auto section--image__background'}>{children}</div>
        </div>
      </div>
    </>
  );
}
