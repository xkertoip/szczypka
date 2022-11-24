import SectionTitle from '../SectionTitle';
import Link from 'next/link';
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
        {/* // perspective*/}
        <div
          className={
            'grid p-8 items-center justify-center drop-shadow-3xl rounded-3xl hover:drop-shadow-4xl bg-zinc-800'
          }
        >
          <p className={'text-2xl pb-8'}>
            If you are intrested colaboration, just let me know
          </p>

          <Link
            href={'/contact'}
            className={
              'btn-primary btn-primary__before btn-primary__after mx-auto'
            }
          >
            Message
          </Link>
        </div>
      </div>
    </>
  );
}
