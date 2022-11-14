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

export default function Framework({
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
          className={`relative transform-preserve p-4 framework--card ${
            currentFrameworkUniqueNumber === uniqueNumber
              ? 'border-red-400'
              : 'border-indigo-400'
          }`}
        >
          <div className={`framework--card__front  `}>
            <Image
              src={image}
              alt={name}
              className={'max-w-[48px] lg:max-w-[64px]'}
              sizes="(max-width: 1024px) 48px,
                          64px"
              placeholder={'blur'}
            />
          </div>
          <div className={'framework--card__back text-xs md:text-sm'}>
            {name}
          </div>
        </motion.div>
      </div>
    </>
  );
}
