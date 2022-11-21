'use client';

import { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';

export default function Stepper() {
  const { setStep, mailInfo } = useContext(ContactContext);
  const currentStep = mailInfo.currentStep;

  return (
    <>
      <div className={' text-zinc-800'}>
        <button
          className={`rounded-full  w-[42px] h-[42px] duration-700 ${
            currentStep === 0 ? 'bg-red-400' : 'bg-indigo-400'
          }`}
          onClick={() => setStep(0)}
        >
          1
        </button>
        <div
          className={`flex-auto bg-indigo-400 relative overflow-hidden mx-auto w-px h-[100px] before:absolute before:w-full before:h-full before:bg-red-400 before:top-0 before:left-0 before:z-[2] before:duration-700 ${
            currentStep && currentStep >= 1
              ? 'before:translate-y-0'
              : 'before:translate-y-[-100%]'
          }`}
        />
        <button
          className={`rounded-full w-[42px] h-[42px] duration-700  ${
            currentStep === 1 ? 'bg-red-400' : 'bg-indigo-400'
          }`}
          onClick={() => setStep(1)}
        >
          2
        </button>
        <div
          className={`flex-auto bg-indigo-400 relative overflow-hidden mx-auto w-px h-[100px] before:absolute before:w-full before:h-full before:bg-red-400 before:top-0 before:left-0 before:z-[2] before:duration-700 ${
            currentStep && currentStep >= 2
              ? 'before:translate-y-0'
              : 'before:translate-y-[-100%]'
          }`}
        />
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
