'use client';

import { ChangeEvent, useContext, useState } from 'react';
import { ContactContext } from '../../../context/ContactContext';

export default function Budget() {
  const { setBudget, mailInfo } = useContext(ContactContext);
  const budget = mailInfo.budget;
  const [value, setValue] = useState(budget !== undefined ? budget : 0);
  const handleBudget = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <>
      <h2 className={'pt-8 sm:pt-16 text-center text-2xl'}>
        How much do you want to invest:
      </h2>
      <div className={'p-8 text-indigo-400 text-right'}>
        <span className={'text-2xl'}>{value}</span>

        <input
          type={'range'}
          min={'1'}
          max={'40000'}
          value={value}
          onChange={handleBudget}
          className={'w-full py-4 caret-red-400 bg-transparent'}
        />
        <button
          className={'btn-primary btn-primary__after btn-primary__before'}
          onClick={() => {
            setBudget(value);
          }}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
