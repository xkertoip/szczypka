'use client';

import { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import { AnimatePresence, m } from 'framer-motion';
import { Budget, Subject, Info } from '../StepContent';

const wrapper = {
  in: {
    y: 0,
    opacity: 1
  },
  out: {
    y: 50,
    opacity: 0
  }
};

export default function Step() {
  const { mailInfo } = useContext(ContactContext);
  const currentStep = mailInfo.currentStep;
  let currentStepContent;
  switch (currentStep) {
    case 0:
      currentStepContent = <Subject />;
      break;
    case 1:
      currentStepContent = <Budget />;
      break;
    case 2:
      currentStepContent = <Info />;
      break;
    default:
      break;
  }
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <m.div
          key={currentStep}
          variants={wrapper}
          exit={'out'}
          initial={'out'}
          animate={'in'}
          className={'relative m-auto w-full min-h-[550px]'}
          transition={{
            y: { duration: 0.5 }
          }}
        >
          {currentStepContent}
        </m.div>
      </AnimatePresence>
    </>
  );
}
