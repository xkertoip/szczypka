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
      <div className={'pt-8 grid sm:grid-cols-2 gap-8 pt-8'}>
        <Content />
      </div>
    </>
  );
}
