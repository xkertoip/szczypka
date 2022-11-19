'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  hover: {
    opacity: 0.5
  },
  neutral: {
    opacity: 0.3
  }
};
type Props = {
  slug: string;
  name: string;
  image: StaticImageData;
  onClick: () => void;
};

export default function ContactSubject({ slug, name, image, onClick }: Props) {
  return (
    <>
      <Link href={`/contact/${slug}`} onClick={onClick}>
        <motion.div
          className={
            'relative overflow-hidden text-center rounded-3xl max-w-[300px] mx-auto drop-shadow-3xl '
          }
          whileHover={'hover'}
          initial={'neutral'}
        >
          <motion.div
            className={
              'z-[-1] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full'
            }
            variants={variants}
          >
            <Image src={image} alt={slug} />
          </motion.div>
          <button
            className={'link-primary text-2xl my-[8vh] sm:my-[5vw] capitalize'}
          >
            {name}
          </button>
        </motion.div>
      </Link>
    </>
  );
}
