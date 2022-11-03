import Image from 'next/image';
import hero2 from '/public/images/me2_retusz.png';
import Link from 'next/link';
import facebook from '/public/images/facebook.png';
import github from '/public/images/github.png';
import instagram from '/public/images/instagram.png';

import FancyButton from '../FancyButton';
const Hero = () => {
  return (
    <>
      <div className={'min-h-screen relative'}>
        <div className={'p-4'}>
          <h2 className={'section-indicator'}>Hello,</h2>
          <div className={'relative'}>
            <div className={'max-w-[60vw] relative m-auto'}>
              <div
                className={
                  'before:absolute before:drop-shadow-2xl before:w-full before:h-[85%] before:bg-rose-900 before:bottom-0 before:rounded-3xl before:-rotate-[45deg] before:origin-center  before:animate-wiggleBg'
                }
              >
                <div
                  className={
                    'rounded-3xl drop-shadow-2xl rotate-[-15deg] origin-center m-auto  relative  overflow-hidden  before:absolute before:w-full before:h-[85%] before:bg-zinc-900 before:bottom-0 before:rounded-3xl animate-wiggle before:border before:border-rose-900'
                  }
                >
                  <div className={'animate-move'}>
                    <Image
                      src={hero2}
                      alt={'Piotr Szczypka'}
                      sizes="(max-width: 768px) 60vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={'relative  translate-y-[-4rem] flex gap-4'}>
              <div className={' flex flex-col justify-start gap-2'}>
                <Link
                  href={'https://github.com/xkertoip'}
                  className={'flex gap-4 items-center'}
                >
                  <Image
                    src={github}
                    alt={'github'}
                    priority
                    width={24}
                    height={24}
                  />
                  Github
                </Link>
                <Link
                  href={'https://www.instagram.com/xkertoip/'}
                  className={'flex gap-4 items-center'}
                >
                  <Image
                    src={instagram}
                    alt={'instagram'}
                    priority
                    width={24}
                    height={24}
                  />
                  Instagram
                </Link>
                <Link
                  href={'https://www.facebook.com/piotrek.szczypka/'}
                  className={'flex gap-4 items-center'}
                >
                  <Image
                    src={facebook}
                    alt={'facebook'}
                    priority
                    width={24}
                    height={24}
                  />
                  Facebook
                </Link>
              </div>
              <h1 className={'title-big text-right drop-shadow-xl'}>
                <span className={'text-rose-900 text-[8rem]'}>P</span>
                <span className={'relative -left-8'}>iotr</span>
                <br /> Szczypka
              </h1>
            </div>
            <p className={'pb-8'}>
              Hello, my name is Piotr. I am{' '}
              <span className={'underline capitalize'}>web</span> /{' '}
              <span className={'underline capitalize'}>frontend</span>/{' '}
              <span className={'underline capitalize'}>react</span> /{' '}
              <span className={'underline capitalize'}>creative</span>{' '}
              Developer, you name it. Lucky owner of 4 legs beast called Bobik.{' '}
              <Link href={'/about'} className={'underline  text-rose-900'}>
                Let&apos;s meet
              </Link>
              !
            </p>
            <div className={'flex justify-evenly items-center'}>
              <FancyButton>
                <a href={'#about'}>Portfolio</a>
              </FancyButton>
              <Link
                href={'/contact'}
                className={'underline animate-pulse text-xl text-rose-900'}
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
