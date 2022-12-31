import SectionTitle from '../SectionTitle';
import Workplaces from './Workplaces';

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
      <Workplaces />
    </>
  );
}
