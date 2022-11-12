'use client';
import Link from 'next/link';
import InfiniteLoop from '../InfiniteLoop';
import Perspective3d from '../Perspective3d';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  link: string;
  image: any;
  technology: any[];
  title: string;
};

const button = {
  show: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    y: '-50%'
  },
  hidden: {
    opacity: 0,
    scale: 0,
    x: '-50%',
    y: '-50%'
  }
};

const wrapper = {
  show: {
    opacity: 0.4
  },
  hidden: {
    opacity: 1
  }
};

export default function Card({ link, image, title, technology }: Props) {
  return (
    <>
      <div className={'space-y-8'}>
        <Link href={'/projects'}>
          <Perspective3d>
            <motion.div
              whileHover={'show'}
              initial={'hidden'}
              className={
                'relative border-t border-indigo-400 rounded-3xl overflow-hidden drop-shadow-3xl hover:drop-shadow-4xl duration-700 '
              }
            >
              <motion.div
                className={'relative h-auto z-[-1] rounded-3xl'}
                variants={wrapper}
              >
                <Image
                  src={image}
                  alt={'Piotr Szczypka'}
                  sizes="(max-width: 768px) 90vw,
                          40vw"
                />
              </motion.div>
              <motion.div
                variants={button}
                className={
                  'absolute  bg-red-400 top-[50%] left-[50%] w-[70px] h-[70px] rounded-full flex items-center justify-center z-[-1] drop-shadow-xl'
                }
              >
                <motion.button className={'capitalize text-zinc-800'}>
                  check
                </motion.button>
              </motion.div>
            </motion.div>
          </Perspective3d>
        </Link>

        <div>
          <h3 className={'text-2xl text-left capitalize'}>{title}</h3>
          <h4 className={'flex  text-secondary'}>
            <InfiniteLoop>
              {technology.map(element => (
                <span className={'mr-4 whitespace-nowrap'} key={element}>
                  {element}
                </span>
              ))}
            </InfiniteLoop>
          </h4>
        </div>
      </div>
    </>
  );
}
