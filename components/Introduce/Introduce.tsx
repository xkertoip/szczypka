import Title from './Title';
import Description from './Description';
import AnimatedImage from './AnimatedImage';

export default function Introduce() {
  return (
    <>
      <div
        className={
          'absolute z-[-1] top-0 left-0 bg-indigo-400 h-full w-[35vw] rounded-r-[4rem]'
        }
      />
      <Title />
      <div className={'flex flex-row sm:gap-16 gap-4 pt-8'}>
        <div className={'basis-1/3'}>
          <AnimatedImage />
        </div>

        <div className={'space-y-8 my-auto basis-2/3'}>
          <Description />
        </div>
      </div>
    </>
  );
}
