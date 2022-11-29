'use client';

import { m } from 'framer-motion';
import { ReactNode } from 'react';
import Perspective3d from '../../Perspective3d';

type Props = {
  children: ReactNode;
  maxWidth: number;
  maxHeight: number;
};

const button = {
  show: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    y: '-50%'
  },
  hidden: {
    opacity: 0,
    scale: 0,
    x: '-50%',
    y: '-50%'
  }
};

const wrapper = {
  show: {
    opacity: 0.4
  },
  hidden: {
    opacity: 1
  }
};

export default function Card({ children, maxWidth, maxHeight }: Props) {
  return (
    <>
      <Perspective3d width={maxWidth} height={maxHeight}>
        <m.div initial={'hidden'} whileHover={'show'} className={'work--card'}>
          <m.div
            className={'relative h-auto z-[-1] rounded-3xl'}
            variants={wrapper}
            transition={{ duration: 0.7 }}
          >
            {children}
          </m.div>
          <m.div variants={button} className={'work--card__btn'}>
            <button className={'capitalize text-zinc-800'}>check</button>
          </m.div>
        </m.div>
      </Perspective3d>
    </>
  );
}
