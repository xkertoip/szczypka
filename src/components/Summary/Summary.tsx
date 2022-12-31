import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import FancyButton from '../FancyButton';

import { lazy } from 'react';

const Perspective = lazy(() => import('../Perspective3d'));
export default function Summary() {
  return (
    <>
      <SectionTitle
        title={'Hire me'}
        align={'left'}
        indicator={'Contact'}
        indicatorNumber={6}
      />
      <div className={'section-container py-12'}>
        <Perspective width={350} height={300}>
          <div
            className={
              'grid p-8 items-center justify-center drop-shadow-3xl rounded-3xl hover:drop-shadow-4xl bg-zinc-800'
            }
          >
            <p className={'text-2xl pb-8'}>
              If you are intrested colaboration, just let me know
            </p>

            <Link href={'/contact'} className={'w-fit mx-auto'}>
              <FancyButton>Message</FancyButton>
            </Link>
          </div>
        </Perspective>
      </div>
    </>
  );
}
