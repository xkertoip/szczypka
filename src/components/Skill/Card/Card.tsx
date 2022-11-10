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
  currentFrameworkUniqueNumber: number;
};

export default function Card({
  handler,
  currentFrameworkUniqueNumber,
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
          animate={
            currentFrameworkUniqueNumber === uniqueNumber ? 'flip' : 'neutral'
          }
          className={`relative w-full h-full transform-preserve p-2 min-w-[4rem] min-h-[4rem] max-w-[4rem]  sm:min-w-[5rem] sm:min-h-[5rem]  framework--card ${
            currentFrameworkUniqueNumber === uniqueNumber
              ? 'border-red-400'
              : 'border-indigo-400'
          }`}
        >
          <div className={`framework--card__front  `}>
            <Image
              src={image}
              alt={name}
              className={'h-[36px] sm:h-[42px] w-auto m-auto'}
              sizes="(max-width: 768px) 56px,
                          100px"
            />
          </div>
          <div className={'framework--card__back '}>{name}</div>
        </motion.div>
      </div>
    </>
  );
}
