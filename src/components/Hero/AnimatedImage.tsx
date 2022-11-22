import Image from 'next/image';
import hero2 from '/public/images/me2_retusz.png';

export default function AnimatedImage() {
  return (
    <div
      className={
        'max-w-[150px] sm:max-w-[250px]  my-auto relative h-fit z-[-1]'
      }
    >
      <div className={'main--image__card'} />
      <div
        className={
          ' m-auto relative overflow-hidden rounded-3xl drop-shadow-3xl  '
        }
      >
        <div className={'main--image__background'} />
        <div className={'animate-move'}>
          <Image src={hero2} alt={'Piotr Szczypka'} />
        </div>
      </div>
    </div>
  );
}
