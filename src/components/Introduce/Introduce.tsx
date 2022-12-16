import Description from './Description';
import SectionTitle from '../SectionTitle';
import dynamic from 'next/dynamic';
import introduce from '/public/images/rsz_hero.jpg';
import Image from 'next/image';

const AnimatedImage = dynamic(() => import('./AnimatedImage'));

export default function Introduce() {
  return (
    <>
      <div className={'flex'}>
        <div
          className={
            'bg-zinc-800 rounded-r-[3rem] py-8 px-4 sm:px-[10%] border-t border-indigo-400 relative drop-shadow-3xl basis-2/3'
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
        <div className={'relative basis-1/3'}>
          <AnimatedImage>
            <div className={'max-w-[50vw] sm:max-w-[350px]'}>
              <Image src={introduce} alt={'Piotr Szczypka'} />
            </div>
          </AnimatedImage>
        </div>
      </div>
    </>
  );
}
