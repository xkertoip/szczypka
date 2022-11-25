import Stepper from '../../../components/Stepper';
import Step from '../../../components/Step';

export default function Project() {
  return (
    <>
      <div className={'flex gap-4 justify-between'}>
        <Stepper />
        <div className={'relative grow flex justify-center'}>
          <Step />
        </div>
      </div>

      {/* TODOO: MAIL, SUCCESS MESSAGE */}
    </>
  );
}
