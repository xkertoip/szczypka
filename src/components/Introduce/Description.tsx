import FancyButton from '../FancyButton';

export default function Description() {
  return (
    <>
      <p className={'py-8'}>
        I come from Kasinka Mała, currently living in Kraków. I&apos;m
        imaginative person with a strong sense of humor. I put huge emphasis on
        self-development. Strongly interested in web development, trying to
        achieve 100% user positive experience. Sometimes i do a break with
        writing code, pick up bag and take a journey to Polish mountain.
      </p>
      <p className={'text-right pb-8'}>
        You will find my resume attached below.
      </p>
      <a href={'/CV21.pdf'} download={'CV_Piotr_Szczypka.pdf'}>
        <FancyButton>Portfolio</FancyButton>
      </a>
    </>
  );
}
