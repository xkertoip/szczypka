import Link from 'next/link';
import Image from 'next/image';
import facebook from '/public/images/facebook.png';
import github from '/public/images/github.png';
import instagram from '/public/images/instagram.png';

export default function SocialMedia() {
  return (
    <div className={' flex flex-col justify-center gap-2'}>
      <Link
        href={'https://github.com/xkertoip'}
        className={'flex gap-4 items-center'}
      >
        <Image src={github} alt={'github'} priority />
        Github
      </Link>
      <Link
        href={'https://www.instagram.com/xkertoip/'}
        className={'flex gap-4 items-center'}
      >
        <Image src={instagram} alt={'instagram'} priority />
        Instagram
      </Link>
      <Link
        href={'https://www.facebook.com/piotrek.szczypka/'}
        className={'flex gap-4 items-center'}
      >
        <Image src={facebook} alt={'facebook'} priority />
        Facebook
      </Link>
    </div>
  );
}
