import SectionTitle from '../SectionTitle';
import Perspective3d from '../Perspective3d';

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
        <Perspective3d>
          <div
            className={
              'grid p-8 sm:p-16 min-h-[40vh] sm:min-h-[50vh] sm:max-w-[50vw] mx-auto flex items-center justify-center drop-shadow-3xl rounded-3xl hover:drop-shadow-4xl bg-zinc-800'
            }
          >
            <p className={'text-2xl'}>
              If you are intrested colaboration, just let me know
            </p>

            <button
              className={
                'btn-primary btn-primary__before btn-primary__after mx-auto'
              }
            >
              Message
            </button>
          </div>
        </Perspective3d>
      </div>
    </>
  );
}
