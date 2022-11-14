import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <div
        className={
          'grid sm:flex sm:justify-evenly space-y-8 sm:space-y-0 sm:items-center'
        }
      >
        <Link
          href={'/contact/work'}
          className={'link-primary text-2xl w-fit m-auto'}
        >
          Work offer
        </Link>

        <Link
          href={'/contact/project'}
          className={'link-primary text-2xl w-fit m-auto'}
        >
          Project
        </Link>

        <Link
          href={'/contact/hi'}
          className={'link-primary text-2xl w-fit m-auto'}
        >
          Say hi
        </Link>
      </div>
    </>
  );
}
