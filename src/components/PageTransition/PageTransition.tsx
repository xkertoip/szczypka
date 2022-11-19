'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const wrapper = {
  in: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1
    }
  },
  out: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={pathname}
          variants={wrapper}
          exit={'out'}
          initial={'out'}
          animate={'in'}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
