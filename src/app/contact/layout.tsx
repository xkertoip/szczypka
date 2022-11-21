import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Providers } from './providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div
        className={
          'section-container md:flex md:gap-8 md:items-center md:justify-center min-h-screen'
        }
      >
        <div className={' flex-1 pt-8 md:pt-0'}>
          <SectionTitle
            title={'Contact'}
            indicator={'Leave me a message!'}
            indicatorNumber={9}
            align={'left'}
          />
        </div>
        <div className={'flex-1 pt-8 md:pt-0'}>
          <Providers>{children}</Providers>
        </div>
      </div>
    </main>
  );
}
