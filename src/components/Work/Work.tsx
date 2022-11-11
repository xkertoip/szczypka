import SectionTitle from '../SectionTitle';
import Card from './Card';
import bierowiec from '/public/images/projects/Bierowiec.jpg';
import amnis from '/public/images/projects/AmnisCode.jpg';
import folio from '/public/images/projects/folio.jpg';

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
  }
];

function renderCars() {
  return (
    <>
      {cards.map(({ technology, image, link, title }) => (
        <Card
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
      <div className={'py-8 space-y-8'}>{renderCars()}</div>
    </>
  );
}
