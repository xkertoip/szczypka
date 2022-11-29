'use client';
import Image, { StaticImageData } from 'next/image';

import { m } from 'framer-motion';

const variants = {
  hover: {
    opacity: 0.5
  },
  neutral: {
    opacity: 0.3
  }
};

interface Props {
  slug: string;
  name: string;
  image: StaticImageData;
}

export default function ContactPickerCard({ slug, name, image }: Props) {
  return (
    <>
      <m.div
        className={
          'relative overflow-hidden text-center rounded-3xl drop-shadow-3xl max-w-[300px] mx-auto'
        }
        whileHover={'hover'}
        initial={'neutral'}
      >
        <m.div
          className={
            'z-[-1] absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full'
          }
          variants={variants}
        >
          <Image src={image} alt={slug} />
        </m.div>
        <button className={'link-primary text-2xl my-12  capitalize'}>
          {name}
        </button>
      </m.div>
    </>
  );
}
