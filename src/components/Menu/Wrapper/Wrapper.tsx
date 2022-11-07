import { ReactNode, useContext } from 'react';
import { motion } from 'framer-motion';
import MenuContext from '../../MenuContext';

type Props = {
  children: ReactNode;
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

export default function Wrapper({ children }: Props) {
  const { openMenu } = useContext(MenuContext);
  return (
    <>
      <motion.div
        className={
          'fixed bottom-0 left-0 w-full  h-screen origin-right bg-zinc-900/80 dark:bg-zinc-600/80 z-10 '
        }
        initial="close"
        animate={openMenu ? 'open' : 'close'}
        variants={variantsBackground}
        transition={{
          duration: 0.3
        }}
      >
        <motion.div
          variants={variantsContainer}
          className={
            'fixed left-0 bottom-0 w-full min-h-screen origin-right bg-neutral-300/50 dark:bg-zinc-900/80 px-4 md:px-20 pb-16 flex '
          }
        >
          <div
            className={
              'flex-auto flex flex-col justify-between border-b-2 border-primaryDark dark:border-primaryLight overflow-hidden'
            }
          >
            {children}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
