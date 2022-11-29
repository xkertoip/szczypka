'use client';

import { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import { AnimatePresence, m } from 'framer-motion';
import { Budget, Subject } from '../StepContent';
import Mail from '../Mail';

const wrapper = {
  in: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1
    }
  },
  out: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 1
    }
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
      currentStepContent = <Mail />;
      break;
    default:
      break;
  }
  return (
    <>
      <AnimatePresence>
        <m.div
          key={currentStep}
          variants={wrapper}
          exit={'out'}
          initial={'out'}
          animate={'in'}
          className={'absolute mx-auto w-full'}
        >
          {currentStepContent}
        </m.div>
      </AnimatePresence>
    </>
  );
}
