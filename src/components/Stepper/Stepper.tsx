'use client';

import { useContext } from 'react';
import { m } from 'framer-motion';
import { ContactContext } from '../../context/ContactContext';

const variants = {
  animate: {
    x: 0
  },
  hidden: {
    x: '-100%'
  }
};

export default function Stepper() {
  const { setStep, mailInfo } = useContext(ContactContext);
  const currentStep = mailInfo.currentStep;
  const validate = currentStep && currentStep >= 1;

  return (
    <>
      <div className={' text-zinc-800 flex'}>
        <button
          className={`rounded-full  min-w-[42px] h-[42px] duration-700 ${
            currentStep === 0 ? 'bg-red-400' : 'bg-indigo-400'
          }`}
          onClick={() => setStep(0)}
        >
          1
        </button>
        <div className={'flex-auto items-center w-full flex'}>
          <div
            className={
              ' bg-indigo-400 relative overflow-hidden mx-auto h-px w-full'
            }
          >
            <m.div
              variants={variants}
              initial={'hidden'}
              animate={currentStep && currentStep >= 1 ? 'animate' : 'hidden'}
              transition={{
                x: { duration: 0.5 },
                delay: currentStep && currentStep >= 1 ? 0 : 0.5,
                default: { ease: 'linear' }
              }}
              className={
                'absolute w-full h-full bg-red-400 top-0 left-0 :z-[2]'
              }
            />
          </div>
        </div>
        <button
          className={`rounded-full min-w-[42px] h-[42px] duration-700  ${
            currentStep === 1 ? 'bg-red-400' : 'bg-indigo-400'
          }`}
          onClick={() => setStep(1)}
        >
          2
        </button>
        <div className={'flex-auto items-center w-full flex'}>
          <div
            className={
              ' bg-indigo-400 relative overflow-hidden mx-auto h-px w-full'
            }
          >
            <m.div
              variants={variants}
              initial={'hidden'}
              animate={currentStep && currentStep >= 2 ? 'animate' : 'hidden'}
              transition={{
                x: { duration: 0.5 },
                delay: currentStep && currentStep >= 2 ? 0.5 : 0,
                default: { ease: 'linear' }
              }}
              className={
                'absolute w-full h-full bg-red-400 top-0 left-0 :z-[2]'
              }
            />
          </div>
        </div>
        <button
          className={`rounded-full min-w-[42px] h-[42px] duration-700  ${
            currentStep === 2 ? 'bg-red-400' : 'bg-indigo-400'
          }
          `}
          onClick={() => setStep(2)}
        >
          3
        </button>
      </div>
    </>
  );
}
