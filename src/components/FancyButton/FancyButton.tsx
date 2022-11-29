'use client';
import { m } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { type?: 'submit' };

const variants = {
  hover: {
    x: 4
  }
};
const spanBeforeVariants = {
  hover: {
    x: '100%'
  },
  initial: {
    x: 0
  }
};
const spanAfterVariants = {
  hover: {
    x: 0
  },
  initial: {
    x: '-100%'
  }
};
export default function FancyButton({ children, type, ...props }: Props) {
  return (
    <m.div variants={variants} whileHover={'hover'} initial={'initial'}>
      <button
        {...props}
        type={type || 'button'}
        className={
          'p-4 drop-shadow-3xl relative text-2xl z-[1] bg-zinc-800 overflow-hidden w-fit'
        }
      >
        {children}
        <m.span
          variants={spanBeforeVariants}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={'h-px absolute w-full top-0 left-0  bg-indigo-400'}
        />
        <m.span
          variants={spanAfterVariants}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={'h-px absolute w-full top-0 left-0  bg-red-400'}
        />
      </button>
    </m.div>
  );
}
