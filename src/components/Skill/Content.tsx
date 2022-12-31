'use client';
import { lazy, Suspense } from 'react';
const Framework = lazy(() => import('./Framework'));
const Slider = lazy(() => import('./Slider'));

import useGetRandomFramework from '../../utils/useGetRandomFramework';
import { frameworks } from '../../lib/date';

export default function Content() {
  const { currentFramework, handleClick } = useGetRandomFramework({
    array: frameworks,
    max: frameworks.length
  });
  const displayFrameworks = frameworks.map(framework => (
    <Framework
      framework={framework}
      handler={handleClick}
      currentFrameworkUniqueNumber={currentFramework.uniqueNumber}
      key={framework.uniqueNumber}
    />
  ));

  return (
    <>
      <div
        className={
          ' sm:basis-1/3 relative bg-zinc-800 max-w-[80%] m-auto border-t border-indigo-400 rounded-3xl drop-shadow-3xl overflow-hidden flex justify-center items-center'
        }
      >
        <div className={'min-h-[200px] w-full sm:min-h-[300px] relative'}>
          <Suspense fallback={<Loading />}>
            <Slider
              name={currentFramework.name}
              number={currentFramework.uniqueNumber}
              logo={currentFramework.image}
            />
          </Suspense>
        </div>
      </div>
      <div
        className={
          'sm:basis-2/3 flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 relative pt-8 sm:pt-0'
        }
      >
        <Suspense fallback={<Loading />}>{displayFrameworks}</Suspense>
      </div>
    </>
  );
}

function Loading() {
  return <p>Loading...</p>;
}
