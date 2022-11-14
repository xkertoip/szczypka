import SectionTitle from '../SectionTitle';
import Project from './Project/Project';
import bierowiec from '/public/images/projects/Bierowiec.png';
import amnis from '/public/images/projects/AmnisCode.png';
import amnisBlog from '/public/images/projects/AmnisBlog.png';
import folio from '/public/images/projects/folio.png';

const cards = [
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
      <div className={'py-8 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-16'}>
        {renderCars()}
      </div>
    </>
  );
}
