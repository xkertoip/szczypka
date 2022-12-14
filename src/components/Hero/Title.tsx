import { lazy, Suspense } from 'react';
const AnimatedLetter = lazy(() => import('../AnimatedLetter'));

export default function Title() {
  return (
    <>
      <h3 className={'section-indicator pt-4 text-right'}>
        N&#176;1&nbsp;Hello
      </h3>
      <h1 className={'title-big text-right'}>
        <span
          className={
            'text-indigo-400 text-8xl sm:text-[10rem] hover:bg-red-400 duration-700'
          }
        >
          P
        </span>
        <span
          className={
            'relative -left-4 hover:bg-indigo-400 duration-700 text-[4rem] sm:text-[5rem]'
          }
        >
          iotr
        </span>
      </h1>
      <h1 className={'title-big text-right whitespace-nowrap '}>
        <Suspense fallback={<LoadingLetter />}>
          <AnimatedLetter>S</AnimatedLetter>
          <AnimatedLetter>z</AnimatedLetter>
          <AnimatedLetter>c</AnimatedLetter>
          <AnimatedLetter>z</AnimatedLetter>
          <AnimatedLetter>y</AnimatedLetter>
          <AnimatedLetter>p</AnimatedLetter>
          <AnimatedLetter>k</AnimatedLetter>
          <AnimatedLetter>a</AnimatedLetter>
        </Suspense>
      </h1>
    </>
  );
}

function LoadingLetter() {
  return (
    <span
      className={
        'hover:text-red-400 duration-700 inline-block text-[4rem] sm:text-[5rem]'
      }
    >
      Szczypka
    </span>
  );
}
