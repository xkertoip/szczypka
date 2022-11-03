import Link from 'next/link';
import Image from 'next/image';
import facebook from '/public/images/facebook.png';
import github from '/public/images/github.png';
import instagram from '/public/images/instagram.png';

export default function SocialMedia() {
  return (
    <ul className={'my-auto space-y-4'}>
      <li className={'flex gap-4 items-center text-xl'}>
        <Image src={github} alt={'github'} priority />
        <Link
          href={'https://github.com/xkertoip'}
          className={
            'relative hover:text-neutral-500 hover:before:text-red-400 duration-700 hover:before:-translate-y-2 before:-translate-x-1 before:duration-700 before:content-["Github"] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100'
          }
          target={'_blank'}
        >
          Github
        </Link>
      </li>
      <li className={'flex gap-4 items-center text-xl'}>
        <Image src={instagram} alt={'github'} priority />
        <Link
          href={'https://www.instagram.com/xkertoip/'}
          className={
            ' relative hover:text-neutral-500 hover:before:text-red-400 duration-700 hover:before:-translate-y-2 before:-translate-x-1 before:duration-700 before:content-["Instagram"] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100'
          }
          target={'_blank'}
        >
          Instagram
        </Link>
      </li>
      <li className={'flex gap-4 items-center text-xl '}>
        <Image src={facebook} alt={'github'} priority />
        <Link
          href={'https://www.facebook.com/piotrek.szczypka/'}
          className={
            ' relative hover:text-neutral-500 hover:before:text-red-400 duration-700 hover:before:-translate-y-2 before:-translate-x-1 before:duration-700 before:content-["Facebook"] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100'
          }
          target={'_blank'}
        >
          Facebook
        </Link>
      </li>
    </ul>
  );
}
