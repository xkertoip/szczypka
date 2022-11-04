'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const flipVariants = {
  flip: {
    rotateY: 180,
    transition: {
      duration: 1
    }
  },
  neutral: {
    rotateY: 0,
    transition: {
      duration: 1
    }
  }
};

type Props = {
  uniqueNumber: number;
  image: any;
  name: string;
  handler: (value: number) => void;
  currentNumber: number;
};

export default function Card({
  handler,
  currentNumber,
  uniqueNumber,
  name,
  image
}: Props) {
  return (
    <>
      <div
        className={` min-w-[5rem] min-h-[5rem] md:min-w-[6rem] md:min-h-[6rem] drop-shadow-3xl hover:drop-shadow-4xl filter-none rounded-2xl border border-indigo-400  sm:hover:border-red-400 sm:dark:hover:border-secondary duration-700 perspective-3d ${
          currentNumber === uniqueNumber
            ? 'border-red-400'
            : 'border-indigo-400'
        }`}
        onClick={() => handler(uniqueNumber)}
      >
        <motion.div
          variants={flipVariants}
          animate={currentNumber === uniqueNumber ? 'flip' : 'neutral'}
          className={'relative w-full h-full transform-preserve '}
        >
          <div
            className={
              'absolute top-0 left-0 w-full h-full backface-hidden flex items-center justify-center'
            }
          >
            <Image
              src={image}
              alt={'Piotr Szczypka'}
              sizes="(max-width: 768px) 75px,
                          150px"
              className={'max-w-[3rem] max-h-[3rem] mx-auto w-full'}
            />
          </div>
          <div
            className={
              'absolute top-0 left-0 w-full h-full  backface-hidden  rotate-y-180 flex items-center justify-center'
            }
          >
            <h3 className={' text-center capitalize'}>{name}</h3>
          </div>
        </motion.div>
      </div>
    </>
  );
}
