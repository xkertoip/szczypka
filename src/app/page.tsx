import Hero from '../components/Hero/Hero';
import Introduce from '../components/Introduce';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Summary from '../components/Summary';

export default function Home() {
  return (
    <main>
      <div className={'overflow-x-hidden space-y-16'}>
        <section className={'section-container min-h-screen grid'}>
          <Hero />
        </section>
        <section>
          <Introduce />
        </section>
        <section>
          <Experience />
        </section>
        <section className={'section-container relative'}>
          <Skill />
        </section>
        <section className={'section-container relative'}>
          {' '}
          <Work />
        </section>
        <section className={'section-container overflow-hidden'}>
          <Summary />
        </section>
      </div>
    </main>
  );
}
