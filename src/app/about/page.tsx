import Image from 'next/image';
import me from '../../../public/images/rsz_introduce.jpg';

export default function About() {
  return (
    <main>
      <section className={'section-container py-8 sm:py-16'}>
        <h1 className={'section-title'}>Something about me</h1>
        {/*TODOO: ANIMATED IMAGE FOLLOWED BY SCROLL, SOME DESCRIPTION ABOUT MYSELF, HOBBY ETC. SOME PICTURES FROM MOUNTAINS*/}
        <Image src={me} alt={'Piotr Szczypka'} />
        <p>description lorem ipsum</p>
      </section>
    </main>
  );
}
