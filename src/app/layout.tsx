import './globals.css';
import { ReactNode } from 'react';
import Head from './head';
import { Lora } from '@next/font/google';
import Menu from '../components/Menu';

const lora = Lora({
  variable: '--font-inter'
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${lora.variable} font-sans`}>
      <Head />
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
