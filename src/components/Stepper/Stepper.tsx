'use client';

import { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';

export default function Stepper() {
  const { setStep, mailInfo } = useContext(ContactContext);
  const currentStep = mailInfo.currentStep;

  return (
    <>
      <div className={'py-8 lg:py-0 text-zinc-800 flex items-center'}>
        <button
          className={`rounded-full  w-[42px] h-[42px] duration-700 ${
            currentStep === 0 ? 'bg-red-400' : 'bg-indigo-400'
          }`}
          onClick={() => setStep(0)}
        >
          1
        </button>
        <div
          className={
            'flex-auto bg-indigo-400 relative overflow-hidden h-px before:absolute before:w-full before:top-0 before:left-0 before:z-[2]'
          }
        />
        <button
          className={`rounded-full w-[42px] h-[42px] duration-700  ${
            currentStep === 1 ? 'bg-red-400' : 'bg-indigo-400'
          }`}
          onClick={() => setStep(1)}
        >
          2
        </button>
        <div className={'flex-auto border-t-2 border-indigo-400'} />
        <button
          className={`rounded-full w-[42px] h-[42px] duration-700  ${
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
