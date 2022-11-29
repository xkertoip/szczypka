'use client';
import { m } from 'framer-motion';
import Image from 'next/image';
import { FrameworkObject } from '../../../lib/types';

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
  framework: FrameworkObject;
  handler: (value: number) => void;
  currentFrameworkUniqueNumber: number;
};

export default function Framework({
  handler,
  framework,
  currentFrameworkUniqueNumber
}: Props) {
  return (
    <>
      <div
        onClick={() => handler(framework.uniqueNumber)}
        className={'transform-preserve'}
      >
        <m.div
          variants={flipVariants}
          animate={
            currentFrameworkUniqueNumber === framework.uniqueNumber
              ? 'flip'
              : 'neutral'
          }
          className={`relative transform-preserve p-4 framework--card ${
            currentFrameworkUniqueNumber === framework.uniqueNumber
              ? 'border-red-400'
              : 'border-indigo-400'
          }`}
        >
          <div className={`framework--card__front  `}>
            <Image
              src={framework.image}
              alt={framework.name}
              className={'max-w-[48px] lg:max-w-[64px]'}
              placeholder={'blur'}
            />
          </div>
          <div className={'framework--card__back text-xs md:text-sm'}>
            {framework.name}
          </div>
        </m.div>
      </div>
    </>
  );
}
