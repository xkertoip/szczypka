'use client';

import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { ContactContext } from '../../../context/ContactContext';

export default function Budget() {
  const { setBudget, mailInfo } = useContext(ContactContext);
  const budget = mailInfo.budget;
  const [value, setValue] = useState(budget !== undefined ? budget : 0);

  const handleBudget = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(Number(event.target.value));
    },
    [setValue]
  );

  return (
    <>
      <h2 className={' text-2xl pb-8'}>How much do you want to invest:</h2>
      <div className={'text-indigo-400 text-right'}>
        <span className={'text-2xl pb-8'}>{value}</span>

        <input
          type={'range'}
          min={'1'}
          max={'40000'}
          value={value}
          onChange={handleBudget}
          className={'w-full caret-red-400 bg-transparent'}
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
