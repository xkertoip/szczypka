'use client';
import { AnimatePresence, m } from 'framer-motion';
import Image from 'next/image';

type Props = {
  number?: number;
  logo: any;
  name: any;
};

const variants = {
  initial: {
    x: '100%',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: '-100%',
    opacity: 0
  }
};

export default function Slider({ logo, name, number }: Props) {
  return (
    <div className={'absolute w-full h-full'}>
      <AnimatePresence>
        <m.div
          key={number}
          className={'absolute w-full h-full grid items-center p-4 sm:p-8'}
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{
            duration: 1
          }}
        >
          <Image
            src={logo}
            alt={name}
            className={' mx-auto max-w-[4rem]'}
            sizes="64px"
          />
          <div className={'border-t border-indigo-400 pt-4'}>
            <h2 className={'text-center capitalize text-2xl my-auto'}>
              {name}
            </h2>
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  );
}
