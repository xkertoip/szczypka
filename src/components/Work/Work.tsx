import SectionTitle from '../SectionTitle';
import { lazy, Suspense } from 'react';
const Project = lazy(() => import('./Project'));

import { cards } from '../../lib/date';

const Cards = cards.map(({ technology, image, link, title }) => (
  <Project
    key={title}
    link={link}
    image={image}
    technology={technology}
    title={title}
  />
));
export default function Work() {
  return (
    <>
      <SectionTitle
        title={'Example work'}
        align={'right'}
        indicator={'projects'}
        indicatorNumber={5}
      />
      <div
        className={'py-8 sm:grid sm:grid-cols-2 sm:justify-between sm:gap-8'}
      >
        <Suspense fallback={<Loading />}>{Cards}</Suspense>
      </div>
    </>
  );
}

function Loading() {
  return <p>Loading...</p>;
}
