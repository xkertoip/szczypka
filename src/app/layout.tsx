import './globals.css';
import React from 'react';
import Head from './head';
import localFont from '@next/font/local';
import Menu from '../components/Menu';

const lora = localFont({
  src: '../../public/fonts/Lora-Regular.ttf'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora} font-sans`}>
      <Head>
        <title>Piotr Szczypka - Creative Dev</title>
      </Head>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
