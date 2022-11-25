import Description from './Description';
import AnimatedImage from './AnimatedImage';
import SectionTitle from '../SectionTitle';

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
          <AnimatedImage />
        </div>
      </div>
    </>
  );
}
