import { AnimatePresence, motion } from 'framer-motion';
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
    /*    <div className={'relative  grid gap-4 '}>
      <div className={'relative max-'}>*/

    <div className={'w-full h-full'}>
      <AnimatePresence>
        <motion.div
          key={number}
          className={'absolute w-full h-full grid items-center p-4'}
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{
            duration: 1
          }}
        >
          <Image src={logo} alt={name} className={'h-[4rem] w-auto mx-auto '} />
          <div className={'border-t border-indigo-400 pt-4'}>
            <h2
              className={
                'text-center capitalize text-red-400 text-2xl  my-auto'
              }
            >
              {name}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
/*    </div>*/
{
  /*      <div className={'relative'}>
        <AnimatePresence>
          <motion.div
            key={name}
            className={'absolute h-full w-full'}
            variants={variants}
            initial={'exit'}
            animate={'animate'}
            exit={'initial'}
            transition={{
              duration: 1
            }}
          >
            <h2 className={'text-center text-2xl text-secondary'}>{name}</h2>
          </motion.div>
        </AnimatePresence>
      </div>*/
}
/*    </div>*/
