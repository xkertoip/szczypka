'use client';
import Image from 'next/image';
import hero2 from '/public/images/me2_retusz.png';
import { LazyMotion, m, domAnimation } from 'framer-motion';
export default function AnimatedImage() {
  return (
    <div className={'  my-auto relative h-fit z-[-1]'}>
      <LazyMotion features={domAnimation}>
        <m.div
          className={'main--image__card'}
          animate={{ rotate: [-30, -45, -30] }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity
          }}
        />
      </LazyMotion>
      <div
        className={
          ' m-auto relative overflow-hidden rounded-3xl drop-shadow-3xl  '
        }
      >
        <div className={'main--image__background'} />
        <LazyMotion features={domAnimation}>
          <m.div
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity
            }}
          >
            <Image
              src={hero2}
              alt={'Piotr Szczypka'}
              priority
              placeholder={'blur'}
              className={'max-w-[150px] sm:max-w-[250px]'}
            />
          </m.div>
        </LazyMotion>
      </div>
    </div>
  );
}
