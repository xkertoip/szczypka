import { lazy } from 'react';
import Description from './Description';
import SectionTitle from '../SectionTitle';
import introduce from '/public/images/rsz_hero.jpg';
import Image from 'next/image';

const AnimatedImage = lazy(() => import('./AnimatedImage'));

export default function Introduce() {
  return (
    <>
      <div className={'relative'}>
        <div
          className={
            'bg-zinc-800 rounded-r-[3rem] py-8 px-4 sm:px-[10%] border-t border-indigo-400 relative drop-shadow-3xl mr-[30%]'
          }
        >
          <SectionTitle
            title={'Positive Guy'}
            indicator={'Introduce'}
            indicatorNumber={2}
            align={'left'}
          />
          <Description />
        </div>
        <div
          className={
            'absolute top-0 right-0 w-[100%] max-w-[200px] sm:max-w-[350px] z-[-1]'
          }
        >
          <AnimatedImage>
            <Image src={introduce} alt={'Piotr Szczypka'} width={350} />
          </AnimatedImage>
        </div>
      </div>
    </>
  );
}
