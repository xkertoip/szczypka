import Hero from '../components/Hero/Hero';
import Introduce from '../components/Introduce';
import Skill from '../components/Skill';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <main>
      <section
        className={
          'section-container relative min-h-screen grid overflow-hidden '
        }
      >
        <Hero />
      </section>
      <section className={'section-container relative overflow-hidden pb-16'}>
        <Introduce />
      </section>
      <section className={'section-container relative overflow-hidden pb-16'}>
        <Experience />
      </section>
      <section className={'section-container relative overflow-hidden pb-16'}>
        <Skill />
      </section>
    </main>
  );
}
