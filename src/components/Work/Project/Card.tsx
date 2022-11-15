'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Perspective3d from '../../Perspective3d';

type Props = {
  children: ReactNode;
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

export default function Card({ children }: Props) {
  return (
    <>
      <Perspective3d>
        <motion.div
          initial={'hidden'}
          whileHover={'show'}
          className={'work--card'}
        >
          <motion.div
            className={'relative h-auto z-[-1] rounded-3xl'}
            variants={wrapper}
            transition={{ duration: 0.7 }}
          >
            {children}
          </motion.div>
          <motion.div variants={button} className={'work--card__btn'}>
            <button className={'capitalize text-zinc-800'}>check</button>
          </motion.div>
        </motion.div>
      </Perspective3d>
    </>
  );
}
