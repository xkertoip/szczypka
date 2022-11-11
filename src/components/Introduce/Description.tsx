import SectionTitle from '../SectionTitle';

export default function Description() {
  return (
    <div
      className={
        'space-y-8 bg-zinc-800 rounded-r-[3rem] py-8 section-container border-t border-indigo-400 relative drop-shadow-3xl basis-2/3'
      }
    >
      <SectionTitle
        title={'Positive Guy'}
        indicator={'Introduce'}
        indicatorNumber={2}
        align={'left'}
      />
      <p>
        I come from Kasinka Mała, currently living in Kraków. I&apos;m
        imaginative person with a strong sense of humor. I put huge emphasis on
        self-development. Strongly interested in web development, trying to
        achieve 100% user positive experience. Sometimes i do a break with
        writing code, pick up bag and take a journey to Polish mountain.
      </p>
      <p>You will find my resume attached below.</p>
      <button
        className={
          'btn-primary btn-primary__before flex mx-auto btn-primary__after'
        }
      >
        <a href={'#about'}>Resume</a>
      </button>
    </div>
  );
}
