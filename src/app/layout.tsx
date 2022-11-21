import './globals.css';
import React from 'react';
import Head from './head';
import { Lora } from '@next/font/google';
import Menu from '../components/Menu';

const lora = Lora();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.className}>
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
