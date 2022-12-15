import Hero from '../components/Hero/Hero';
/*import Skill from '../components/Skill';
import Work from '../components/Work';
import Summary from '../components/Summary';*/
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import Experience from '../components/Experience';

const Introduce = dynamic(() => import('../components/Introduce'));
/*const Experience = dynamic(() => import('../components/Experience'));*/

export default function Home() {
  return (
    <main>
      <div className={'overflow-x-hidden space-y-16'}>
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
        {/*    <section
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
        </section>*/}
      </div>
      <footer className={'lg:max-w-[1170px] mx-auto'}>
        <Footer />
      </footer>
    </main>
  );
}
