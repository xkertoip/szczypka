'use client';

import { ChangeEvent, useCallback, useContext, useState } from 'react';
import { ContactContext } from '../../../context/ContactContext';
import FancyButton from '../../FancyButton';

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
      <div className={'text-indigo-400'}>
        <span className={'text-2xl mb-4'}>{value}</span>

        <input
          type={'range'}
          min={'1'}
          max={'40000'}
          value={value}
          onChange={handleBudget}
          className={'w-full caret-red-400 bg-transparent mb-8'}
        />
        <div className={'text-center'}>
          <FancyButton
            onClick={() => {
              setBudget(value);
            }}
          >
            Confirm
          </FancyButton>
        </div>
      </div>
    </>
  );
}
