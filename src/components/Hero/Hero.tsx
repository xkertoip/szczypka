import { lazy } from 'react';
import SocialMedia from './SocialMedia';
import Image from 'next/image';
import hero2 from '../../../public/images/me2_retusz.png';

const Title = lazy(() => import('./Title'));
const Description = lazy(() => import('./Description'));
const AnimatedImage = lazy(() => import('./AnimatedImage'));

export default function Hero() {
  return (
    <>
      <div className={'flex rotate-[-15deg] gap-4 justify-center pt-8'}>
        <AnimatedImage>
          <div className={'max-w-[150px] sm:max-w-[250px]'}>
            <Image src={hero2} alt={'Piotr Szczypka'} priority />
          </div>
        </AnimatedImage>
        <SocialMedia />
      </div>

      <div className={' relative -top-8 '}>
        <div className={'sm:flex gap-8 justify-between items-end space-y-8'}>
          <div className={'sm:order-2'}>
            <Title />
          </div>
          <div className={'sm:order-1 max-w-[350px] space-y-8'}>
            <Description />
          </div>
        </div>
      </div>
    </>
  );
}
