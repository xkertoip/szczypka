'use client';

import { createContext, ReactNode, useCallback, useState } from 'react';

interface Mail {
  subject: string | undefined;
  currentStep?: number;
  projectSubject?: string | undefined;
  budget?: number | undefined;
  name: string;
  message: string;
}

type ContactContextType = {
  setSubject: (subject: string | undefined) => void;
  setProjectSubject: (value: string | undefined) => void;
  setBudget: (budget: number) => void;
  setStep: (step: number) => void;
  mailInfo: Mail;
};

export const ContactContext = createContext<ContactContextType>({
  setSubject: () => {},
  setProjectSubject: () => {},
  setBudget: () => {},
  setStep: () => {},
  mailInfo: { name: '', message: '', subject: undefined, currentStep: 0 }
});
type Props = {
  children: ReactNode;
};

export function ContactProvider({ children }: Props) {
  const [mailInfo, setMailInfo] = useState<Mail>({
    name: '',
    message: '',
    subject: undefined,
    currentStep: 0
  });

  const setSubject = useCallback(
    (subject: Mail['subject']) => {
      setMailInfo({ ...mailInfo, subject });
    },
    [mailInfo]
  );
  const setProjectSubject = useCallback(
    (projectSubject: Mail['projectSubject']) => {
      setMailInfo({ ...mailInfo, projectSubject, currentStep: 1 });
    },
    [mailInfo]
  );
  const setBudget = useCallback(
    (budget: Mail['budget']) => {
      setMailInfo({ ...mailInfo, budget, currentStep: 2 });
    },
    [mailInfo]
  );

  const setStep = useCallback(
    (currentStep: Mail['currentStep']) => {
      setMailInfo({ ...mailInfo, currentStep });
    },
    [mailInfo]
  );

  return (
    <ContactContext.Provider
      value={{
        setSubject,
        setProjectSubject,
        setBudget,
        setStep,
        mailInfo
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
