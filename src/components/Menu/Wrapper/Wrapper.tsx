'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  toggle: boolean;
};

const variantsContainer = {
  close: {
    scaleX: 0,
    transition: {
      duration: 0.3,
      staggerDirection: -1,
      staggerChildren: 0.1,
      when: 'afterChildren'
    }
  },
  open: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      when: 'beforeChildren'
    }
  }
};

const variantsBackground = {
  close: {
    scaleX: 0,
    transition: {
      when: 'afterChildren'
    }
  },
  open: {
    scaleX: 1,
    transition: {
      when: 'beforeChildren'
    }
  }
};

export default function Wrapper({ children, toggle }: Props) {
  return (
    <>
      <motion.div
        className={
          'fixed bottom-0 left-0 w-full  h-screen origin-right bg-zinc-800/90 z-10 '
        }
        initial="close"
        animate={toggle ? 'open' : 'close'}
        variants={variantsBackground}
        transition={{
          duration: 0.3
        }}
      >
        <motion.div
          variants={variantsContainer}
          className={
            'fixed left-0 bottom-0 w-full min-h-screen origin-right bg-zinc-800/80 pl-4 pr-12 sm:px-16 py-16 flex'
          }
        >
          <div
            className={
              'flex-auto flex flex-col justify-between border-b border-r border-red-400 overflow-hidden pr-4'
            }
          >
            {children}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
