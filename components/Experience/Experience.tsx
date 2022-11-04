import Title from './Title';
import Card from './Card';
import holding from '/public/images/workplace/holding1.png';
import amnis from '/public/images/workplace/amniscode.png';
import szczypka from '/public/images/workplace/logoPS_light.png';

export default function Experience() {
  return (
    <>
      <Title />
      <div
        className={
          'pt-8 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  md:overflow-x-hidden md:px-8 md:w-full justify-between space-x-8'
        }
      >
        <Card
          image={holding}
          time={'20/09/2019'}
          description={
            'First journey as a programmer and to be more specific as a junior Front end Developer. Made hardest decision in my life: React or Angular. Getting started with road map of web development'
          }
          job={'Internship'}
        />
        <Card
          image={amnis}
          time={'20/09/2019'}
          description={
            'First real job as a Junior Front end Developer.  Unplasand clash with reality, how much knowledge do I still have to acquire'
          }
          job={'Jr Frontend Dev'}
        />
        <Card
          image={szczypka}
          time={'20/09/2019'}
          description={
            "Slow way of self-study , browse the StackOverflow, independent creation of websites. I already have some knowledge about web development but still i discover that i don't know everything"
          }
          job={'Freelance'}
        />
      </div>
    </>
  );
}
