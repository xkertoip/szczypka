import Link from 'next/link';
import FancyButton from '../FancyButton';
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
        <a href={'/CV21.pdf'} download={'CV_Piotr_Szczypka.pdf'}>
          <FancyButton>Portfolio</FancyButton>
        </a>
      </div>
    </>
  );
}
