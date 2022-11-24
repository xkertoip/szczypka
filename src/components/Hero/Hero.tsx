import SocialMedia from './SocialMedia';
import Title from './Title';
import AnimatedImage from './AnimatedImage';
import Description from './Description';
export default function Hero() {
  return (
    <>
      <div className={'flex rotate-[-15deg] gap-4 justify-center pt-8'}>
        <AnimatedImage />
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
