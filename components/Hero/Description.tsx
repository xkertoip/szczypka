import Link from 'next/link';

export default function Description() {
  return (
    <p>
      Hello, my name is Piotr. I am{' '}
      <span className={'underline capitalize'}>web</span> /{' '}
      <span className={'underline capitalize'}>frontend</span>/{' '}
      <span className={'underline capitalize'}>react</span> /{' '}
      <span className={'underline capitalize'}>creative</span> Developer, you
      name it. Lucky owner of 4 legs beast called Bobik.{' '}
      <Link
        href={'/about'}
        className={
          'underline  text-indigo-400 hover:text-red-400 duration-700 '
        }
      >
        Let&apos;s meet
      </Link>
      !
    </p>
  );
}
