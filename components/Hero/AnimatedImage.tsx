import Image from 'next/image';
import hero2 from '/public/images/me2_retusz.png';

export default function AnimatedImage() {
  return (
    <div
      className={
        'max-w-[150px] sm:max-w-[250px] z-[-1] relative before:absolute before:drop-shadow-3xl before:w-full before:h-[85%] before:bg-indigo-400 before:bottom-0 before:rounded-3xl before:-rotate-[15deg] before:origin-center  before:animate-wiggleBg'
      }
    >
      <div
        className={
          'rounded-3xl drop-shadow-3xl origin-center m-auto  relative  overflow-hidden  before:absolute before:w-full before:h-[85%] before:bg-red-400 before:bottom-0 before:rounded-3xl before:border before:border-indigo-400 before:z-[-1]'
        }
      >
        <Image
          src={hero2}
          alt={'Piotr Szczypka'}
          sizes="(max-width: 768px) 60vw,
                          (max-width: 1200px) 50vw,
                          33vw"
          priority
          className={'animate-move'}
        />
      </div>
    </div>
  );
}
