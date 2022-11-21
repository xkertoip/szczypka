'use client';
import { motion } from 'framer-motion';

const variantsStickFirst = {
  open: {
    rotate: 45,
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%'
  },
  close: {
    rotate: 0
  }
};
const variantsStickLast = {
  open: {
    rotate: -45,
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%'
  },
  close: {
    rotate: 0
  }
};
type Props = {
  toggle: boolean;
  toggleMenu: () => void;
};
export default function Hamburger({ toggle, toggleMenu }: Props) {
  return (
    <motion.button
      onClick={toggleMenu}
      animate={toggle ? 'open' : 'close'}
      name={'menu'}
      aria-label={'menu'}
      id={'menu'}
      className={
        ' fixed top-[50%] -translate-y-[50%] w-9 right-0 z-50 h-12 bg-red-400 sm:hover:bg-indigo-400 duration-700 rounded-l-2xl drop-shadow-3xl sm:hover:drop-shadow-4xl'
      }
    >
      <div className={'relative w-3 h-6 flex m-auto '}>
        <motion.span
          variants={variantsStickFirst}
          className={'top-0 h-full absolute w-1 left-0 bg-zinc-800'}
        />
        <motion.span
          variants={variantsStickLast}
          className={'top-0 h-full absolute w-1 right-0 bg-zinc-800'}
        />
      </div>
    </motion.button>
  );
}
