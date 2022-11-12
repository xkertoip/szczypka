import SectionTitle from '../SectionTitle';
import Content from './Content';

export default function Skill() {
  return (
    <>
      <SectionTitle
        title={'My little stack'}
        indicator={'Skills'}
        indicatorNumber={4}
        align={'left'}
      />
      <div className={'pt-8 sm:flex sm:justify-between gap-8 sm:gap-16'}>
        <Content />
      </div>
    </>
  );
}
