import Footer from '../components/Footer';
import { lazy } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const Introduce = lazy(() => import('../components/Introduce'));
const Experience = lazy(() => import('../components/Experience'));
const Skill = lazy(() => import('../components/Skill'));
const Work = lazy(() => import('../components/Work'));
const Summary = lazy(() => import('../components/Summary'));

export default function Home() {
  return (
    <main>
      <div className={'overflow-x-hidden space-y-32'}>
        <section
          className={
            'section-container min-h-screen grid md:max-w-[1170px] mx-auto'
          }
        >
          <Hero />
        </section>
        <section>
          <Introduce />
        </section>
        <section className={'lg:max-w-[1170px] mx-auto'}>
          <Experience />
        </section>
        <section
          className={'section-container relative lg:max-w-[1170px] mx-auto'}
        >
          <Skill />
        </section>

        <section
          className={'section-container relative lg:max-w-[1170px] mx-auto'}
        >
          <Work />
        </section>

        <section
          className={
            'section-container overflow-hidden lg:max-w-[1170px] mx-auto'
          }
        >
          <Summary />
        </section>
      </div>
      <footer className={'lg:max-w-[1170px] mx-auto'}>
        <Footer />
      </footer>
    </main>
  );
}
