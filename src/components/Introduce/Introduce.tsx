import Description from './Description';
import AnimatedImage from './AnimatedImage';

export default function Introduce() {
  return (
    <>
      <div className={'flex'}>
        <Description />
        <AnimatedImage />
      </div>
    </>
  );
}
