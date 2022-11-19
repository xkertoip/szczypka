import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Providers } from './providers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={'section-container py-8 sm:py-16'}>
        <div className={'pb-8 sm:pb-16'}>
          <SectionTitle
            title={'Contact'}
            indicator={'Leave me a message!'}
            indicatorNumber={9}
            align={'left'}
          />
        </div>
        <Providers>{children}</Providers>
      </div>
    </main>
  );
}
