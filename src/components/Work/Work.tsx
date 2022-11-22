import SectionTitle from '../SectionTitle';
import Project from './Project/Project';
import bierowiec from '/public/images/projects/Bierowiec.jpg';
import amnis from '/public/images/projects/AmnisCode.jpg';
import amnisBlog from '/public/images/projects/AmnisBlog.jpg';
import folio from '/public/images/projects/folio.jpg';
import { ProjectObject } from '../../lib/types';

const cards: ProjectObject[] = [
  {
    title: 'folio',
    image: folio,
    link: '',
    technology: ['react', 'nextjs', 'tailwind']
  },
  {
    title: 'bierowiec',
    image: bierowiec,
    link: '',
    technology: ['react', 'nextjs', 'tailwind']
  },
  {
    title: 'AmnisCode',
    image: amnis,
    link: '',
    technology: ['react', 'nextjs', 'tailwind']
  },
  {
    title: 'AnmnisCode Blog',
    image: amnisBlog,
    link: '',
    technology: ['wordpress', 'css']
  }
];

function renderCars() {
  return (
    <>
      {cards.map(({ technology, image, link, title }) => (
        <Project
          key={title}
          link={link}
          image={image}
          technology={technology}
          title={title}
        />
      ))}
    </>
  );
}
export default function Work() {
  return (
    <>
      <SectionTitle
        title={'Example work'}
        align={'right'}
        indicator={'projects'}
        indicatorNumber={5}
      />
      <div className={'py-8 md:grid md:grid-cols-2 md:justify-evenly md:gap-8'}>
        {renderCars()}
      </div>
    </>
  );
}
