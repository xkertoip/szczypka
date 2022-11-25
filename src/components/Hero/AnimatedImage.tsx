'use client';
import Image from 'next/image';
import hero2 from '/public/images/me2_retusz.png';
import { LazyMotion, m } from 'framer-motion';

const loadFeatures = () => import('./Features').then(res => res.default);
export default function AnimatedImage() {
  return (
    <div className={'  my-auto relative h-fit z-[-1]'}>
      <LazyMotion features={loadFeatures}>
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
        <LazyMotion features={loadFeatures}>
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
