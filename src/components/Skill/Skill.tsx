import Picker from './Picker';
import SectionTitle from '../SectionTitle';

export default function Skill() {
  return (
    <>
      <SectionTitle
        title={'My little stack'}
        indicator={'Skills'}
        indicatorNumber={4}
        align={'left'}
      />
      <Picker />
    </>
  );
}
