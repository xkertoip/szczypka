import Hero from '../components/Hero/Hero';
import Introduce from '../components/Introduce';

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Introduce />
      </section>
    </main>
  );
}
