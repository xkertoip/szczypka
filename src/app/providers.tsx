'use client';
import React, { ReactNode } from 'react';
import Menu from '../components/Menu';
import MenuProvider from '../components/MenuProvider';

type Props = {
  children: ReactNode;
};
export function Providers({ children }: Props) {
  return (
    <MenuProvider>
      <Menu />
      {children}
    </MenuProvider>
  );
}
