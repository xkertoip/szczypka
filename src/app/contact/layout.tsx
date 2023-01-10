import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Providers } from './providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div
        className={
          'section-container lg:max-w-[1170px] lg:mx-auto md:flex md:gap-8 min-h-screen overflow-hidden'
        }
      >
        <div className={' md:flex-1 pt-8 md:pt-0 md:m-auto pb-8 md:pb-0'}>
          <SectionTitle
            title={'Contact'}
            indicator={'Leave me a message!'}
            indicatorNumber={9}
            align={'left'}
          />
        </div>
        <div className={'md:flex-1 m-auto'}>
          <Providers>{children}</Providers>
        </div>
      </div>
    </main>
  );
}
