import Link from 'next/link';

export default function Description() {
  return (
    <>
      <p>
        Hello, my name is Piotr. I am{' '}
        <span className={'underline capitalize'}>web</span> /{' '}
        <span className={'underline capitalize'}>frontend</span>/{' '}
        <span className={'underline capitalize'}>react</span> /{' '}
        <span className={'underline capitalize'}>creative</span> Developer, you
        name it. Lucky owner of 4 legs beast called Bobik.{' '}
        <button
          className={
            'underline  text-indigo-400 hover:text-red-400 duration-700 '
          }
        >
          Check more !
        </button>
      </p>
      <div className={'flex justify-end gap-12 items-center '}>
        <Link href={'/contact'} className={'link-primary whitespace-nowrap'}>
          Hire me
        </Link>
        <button
          className={'btn-primary btn-primary__before btn-primary__after'}
        >
          Portfolio
        </button>
      </div>
    </>
  );
}
