import Hero from '../components/Hero/Hero';
import Introduce from '../components/Introduce';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Work from '../components/Work';

export default function Home() {
  return (
    <main>
      <div className={'overflow-x-hidden space-y-16'}>
        <section className={'section-container min-h-screen grid'}>
          <Hero />
        </section>
        <section className={''}>
          <Introduce />
        </section>
        <section className={' relative'}>
          <Experience />
        </section>
        <section className={'section-container relative'}>
          <Skill />
        </section>
        <Work />
      </div>
    </main>
  );
}
