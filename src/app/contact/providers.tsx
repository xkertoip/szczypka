import React, { ReactNode } from 'react';
import { ContactProvider } from '../../context/ContactContext';

type Props = {
  children: ReactNode;
};
export function Providers({ children }: Props) {
  return <ContactProvider>{children}</ContactProvider>;
}
