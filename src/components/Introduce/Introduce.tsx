import Description from './Description';
import AnimatedImage from './AnimatedImage';
import SectionTitle from '../SectionTitle';

export default function Introduce() {
  return (
    <>
      <div
        className={
          'bg-indigo-900 rounded-r-[4rem] py-8 section-container relative'
        }
      >
        <SectionTitle
          title={'Positive Guy'}
          indicator={'Introduce'}
          indicatorNumber={2}
          align={'left'}
        />
        <Description />
        <AnimatedImage />
      </div>
    </>
  );
}
