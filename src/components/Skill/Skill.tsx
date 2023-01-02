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
      <Content />
    </>
  );
}
