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
      <div className={'pt-8 sm:grid sm:grid-cols-2 pt-8 space-y-8'}>
        <Content />
      </div>
    </>
  );
}
