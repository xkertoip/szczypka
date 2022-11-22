import introduce from '/public/images/rsz_hero.jpg';
import Image from 'next/image';

export default function AnimatedImage() {
  return (
    <div className={'relative basis-1/3'}>
      <div
        className={
          'absolute left-0 -top-8  translate-x-[-50%] w-[50vw] sm:max-w-[350px] rotate-[15deg] z-[-1]'
        }
      >
        <div className={'relative h-fit  z-[-1]'}>
          <div className={'section--image__card'} />
          <div className={' m-auto section--image__background'}>
            <Image
              src={introduce}
              alt={'Piotr Szczypka'}
              sizes="(max-width: 768px) 50vw,
                          300px"
              placeholder={'blur'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
