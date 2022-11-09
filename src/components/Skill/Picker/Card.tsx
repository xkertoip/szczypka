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
      duration: 1,
      delay: 0.3
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
        onClick={() => handler(uniqueNumber)}
        className={'transform-preserve'}
      >
        <motion.div
          variants={flipVariants}
          animate={currentNumber === uniqueNumber ? 'flip' : 'neutral'}
          className={`relative w-full h-full transform-preserve p-2 min-w-[4rem] min-h-[4rem] max-w-[4rem]  sm:min-w-[5rem] sm:min-h-[5rem]  framework--card ${
            currentNumber === uniqueNumber
              ? 'border-red-400'
              : 'border-indigo-400'
          }`}
        >
          <div className={`framework--card__front  `}>
            <Image
              src={image}
              alt={name}
              className={'h-[36px] sm:h-[42px] w-auto m-auto'}
            />
          </div>
          <div className={'framework--card__back '}>{name}</div>
          {/*    <div
            className={
              'absolute top-0 left-0 w-full h-full backface-hidden flex items-center justify-center'
            }
          >
            <Image src={image} alt={name} className={'h-[36px] w-auto'} />
          </div>
          <div
            className={
              'absolute top-0 left-0 w-full h-full backface-hidden rotate-y-180 flex items-center justify-center'
            }
          >
            <h3 className={' text-center capitalize text-xs'}>{name}</h3>
          </div>*/}
        </motion.div>
      </div>
    </>
  );
}
