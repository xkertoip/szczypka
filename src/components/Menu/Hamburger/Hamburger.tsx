'use client';
import { m } from 'framer-motion';
import { useContext } from 'react';
import MenuContext from '../../../context/MenuContext';

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
const variantsHamburger = {
  initial: {
    top: '50%',
    y: '-50%'
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
export default function Hamburger() {
  const { toggle, changeToggle } = useContext(MenuContext);
  return (
    <m.button
      onClick={changeToggle}
      animate={toggle ? 'open' : 'close'}
      name={'menu'}
      aria-label={'menu'}
      id={'menu'}
      className={
        ' fixed w-9 right-0 top-0 z-50 h-12 bg-red-400 sm:hover:bg-indigo-400 rounded-l-2xl drop-shadow-3xl sm:hover:drop-shadow-4xl'
      }
    >
      <div className={'relative w-3 h-6 flex m-auto '}>
        <m.span
          variants={variantsStickFirst}
          className={'top-0 h-full absolute w-1 left-0 bg-zinc-800'}
        />
        <m.span
          variants={variantsStickLast}
          className={'top-0 h-full absolute w-1 right-0 bg-zinc-800'}
        />
      </div>
    </m.button>
  );
}
