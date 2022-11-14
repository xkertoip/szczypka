import React from 'react';
import SectionTitle from '../../components/SectionTitle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={'section-container pt-8 sm:pt-16 min-h-screen grid'}>
        <div>
          <SectionTitle
            title={'Contact'}
            indicator={'Leave me a message!'}
            indicatorNumber={9}
            align={'left'}
          />
        </div>
        {children}
      </div>
    </main>
  );
}
