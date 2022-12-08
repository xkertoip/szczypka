import dynamic from 'next/dynamic';
import SectionTitle from '../SectionTitle';
import { workplaces } from '../../lib/date';

const Workplace = dynamic(() => import('./Workplace'));

const Workplaces = workplaces.map(({ time, job, description, image, name }) => (
  <Workplace
    image={image}
    time={time}
    description={description}
    job={job}
    name={name}
    key={job}
  />
));

export default function Experience() {
  return (
    <>
      <div className={'px-4 sm:px-[10%]'}>
        <SectionTitle
          title={'I worked here'}
          indicator={'Workplace'}
          indicatorNumber={3}
          align={'right'}
        />
      </div>
      <div
        className={
          'flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  sm:overflow-x-hidden section-container sm:w-full justify-between space-x-8 lg:space-x-16'
        }
      >
        {Workplaces}
      </div>
    </>
  );
}
