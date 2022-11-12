import SectionTitle from '../SectionTitle';
import Perspective3d from '../Perspective3d';

export default function Summary() {
  return (
    <>
      <SectionTitle
        title={'If you are intrested colaboration, just let me know'}
        align={'left'}
        indicator={'Contact'}
        indicatorNumber={6}
      />
      <div className={'section-container py-12'}>
        <Perspective3d>
          <div
            className={
              'min-h-[40vh] sm:min-h-[50vh] max-w-[50vw] mx-auto flex items-center justify-center drop-shadow-3xl rounded-3xl hover:drop-shadow-4xl bg-zinc-800'
            }
          >
            <button
              className={'btn-primary btn-primary__before btn-primary__after'}
            >
              Hire me
            </button>
          </div>
        </Perspective3d>
      </div>
    </>
  );
}
