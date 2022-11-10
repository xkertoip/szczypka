import { motion } from 'framer-motion';
import { useContext } from 'react';
import MenuContext from '../../MenuContext';

const variantsStickFirst = {
  open: {
    rotate: -45,
    top: '50%',
    translateY: '-50%'
  },
  close: {
    rotate: 0
  }
};
const variantsStickLast = {
  open: {
    rotate: 45,
    top: '50%',
    translateY: '-50%'
  },
  close: {
    rotate: 0
  }
};

export default function Hamburger() {
  const { handleOpen, openMenu } = useContext(MenuContext);
  return (
    <motion.button
      onClick={handleOpen}
      animate={openMenu ? 'open' : 'close'}
      name={'menu'}
      aria-label={'menu'}
      id={'menu'}
      className={
        ' fixed top-[50%] -translate-y-[50%] right-0 z-50 flex justify-center h-12 items-center p-2'
      }
    >
      <div className={'relative w-9 h-4 flex z-[-1] rotate-90 '}>
        <motion.span
          variants={variantsStickFirst}
          className={'top-0 w-full absolute h-0.5 left-0 bg-neutral-400'}
        />
        <motion.span
          variants={variantsStickLast}
          className={'bottom-0 w-full absolute h-0.5 left-0 bg-neutral-400'}
        />
      </div>
    </motion.button>
  );
}
