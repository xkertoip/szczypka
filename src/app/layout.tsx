import './globals.css';
import { ReactNode } from 'react';
import Head from './head';
import localFont from '@next/font/local';
import Menu from '../components/Menu';
import Providers from './providers';

const myFont = localFont({
  src: './fonts/Lora.ttf'
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={myFont.className}>
      <Head />
      <body>
        <Providers>
          <Menu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
