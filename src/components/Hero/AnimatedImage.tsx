import Image from 'next/image';
import hero2 from '/public/images/me2_retusz.png';

export default function AnimatedImage() {
  return (
    <div className={'max-w-[150px] sm:max-w-[250px] main--image__card my-auto'}>
      <div className={' m-auto main--image__background  '}>
        <Image
          src={hero2}
          alt={'Piotr Szczypka'}
          sizes="(max-width: 768px) 150px,
                          250px"
          priority
          className={'animate-move'}
        />
      </div>
    </div>
  );
}
