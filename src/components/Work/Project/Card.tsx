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
        <m.div
          initial={'hidden'}
          whileHover={'show'}
          className={
            'relative border-t border-indigo-400 rounded-3xl overflow-hidden drop-shadow-3xl hover:drop-shadow-4xl duration-700'
          }
        >
          <m.div
            className={'relative h-auto z-[-1] rounded-3xl'}
            variants={wrapper}
            transition={{ duration: 0.7 }}
          >
            {children}
          </m.div>
          <m.div
            variants={button}
            className={
              'absolute  bg-red-400 top-[50%] left-[50%] w-[70px] h-[70px] rounded-full flex items-center justify-center z-[-1] drop-shadow-xl'
            }
          >
            <button className={'capitalize text-zinc-800'}>check</button>
          </m.div>
        </m.div>
      </Perspective3d>
    </>
  );
}
