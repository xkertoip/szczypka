'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';

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
  function setSubject(subject: Mail['subject']) {
    setMailInfo({ ...mailInfo, subject });
  }
  function setProjectSubject(projectSubject: Mail['projectSubject']) {
    setMailInfo({ ...mailInfo, projectSubject, currentStep: 1 });
  }

  function setBudget(budget: Mail['budget']) {
    setMailInfo({ ...mailInfo, budget, currentStep: 2 });
  }

  function setStep(currentStep: Mail['currentStep']) {
    setMailInfo({ ...mailInfo, currentStep });
  }

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
