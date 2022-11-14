'use client';

/*
import { useContext } from 'react';
import { FormContext } from '../MailProvider';
*/

export default function Stepper() {
  /*  const { activeStep, handleStepper, formData } = useContext(FormContext);*/

  return (
    <>
      <div
        className={
          'flex items-center py-4 text-zinc-800 justify-evenly max-w-[50vw]'
        }
      >
        <button
          className={`rounded-full bg-red-400 w-[42px] h-[42px] duration-700`}
        >
          1
        </button>
        <div
          className={
            'flex-auto border-t-2 border-primaryDark relative dark:border-primaryLight overflow-hidden before:border-t-2 before:absolute before:w-full before:top-0 before:left-0 before:z-[2]'
          }
        />
        <button
          className={`rounded-full w-[42px] h-[42px] duration-700 bg-indigo-400`}
        >
          2
        </button>
        <div
          className={
            'flex-auto border-t-2 border-primaryDark dark:border-primaryLight'
          }
        />
        <button
          className={`rounded-full w-[42px] h-[42px] duration-700 bg-indigo-400
          `}
        >
          3
        </button>
      </div>
    </>
  );
}
