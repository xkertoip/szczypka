import introduce from '/public/images/rsz_introduce.jpg';
import Image from 'next/image';

export default function AnimatedImage() {
  return (
    <div className={'max-w-[100px] sm:max-w-[200px] section--image__card'}>
      <div className={' m-auto section--image__background  '}>
        <Image
          src={introduce}
          alt={'Piotr Szczypka'}
          sizes="(max-width: 768px) 100px,
                          200px"
        />
      </div>
    </div>
  );
}
