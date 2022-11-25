'use client';
import introduce from '/public/images/rsz_hero.jpg';
import Image from 'next/image';
import { LazyMotion, m } from 'framer-motion';
const loadFeatures = () => import('../Hero/Features').then(res => res.default);
export default function AnimatedImage() {
  return (
    <>
      <div
        className={
          'absolute left-0 -top-8  translate-x-[-50%]  rotate-[15deg] z-[-1]'
        }
      >
        <div className={'relative h-fit z-[-1]'}>
          <LazyMotion features={loadFeatures}>
            <m.div
              className={'section--image__card'}
              animate={{ rotate: [-15, -10, -15] }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity
              }}
            />
          </LazyMotion>
          <div className={' m-auto section--image__background'}>
            <Image
              src={introduce}
              alt={'Piotr Szczypka'}
              placeholder={'blur'}
              className={'max-w-[50vw] sm:max-w-[350px]'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
