import SectionTitle from '../SectionTitle';
import Project from './Project/Project';

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
        {Cards}
      </div>
    </>
  );
}
