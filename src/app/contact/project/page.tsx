import { lazy } from 'react';

const Stepper = lazy(() => import('../../../components/Stepper'));
const Step = lazy(() => import('../../../components/Step'));

export default function Project() {
  return (
    <>
      <div className={'grid'}>
        <Stepper />
        <div className={'relative grow flex justify-center pt-8 md:pt-16'}>
          <Step />
        </div>
      </div>

      {/* TODOO: MAIL, SUCCESS MESSAGE */}
    </>
  );
}
