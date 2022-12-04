import Workplace from './Workplace';

import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import holding from 'public/images/workplace/images/holding1.png';
/*import { workplaces } from '../../lib/date';*/

/*const Workplaces = workplaces.map(({ time, job, description, image, name }) => (
  <Workplace
    image={image}
    time={time}
    description={description}
    job={job}
    name={name}
    key={job}
  />
));*/

export default function Experience() {
  return (
    <>
      <div className={'px-4 sm:px-[10%]'}>
        <SectionTitle
          title={'I worked here'}
          indicator={'Workplace'}
          indicatorNumber={3}
          align={'right'}
        />
      </div>
      <div
        className={
          'flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  sm:overflow-x-hidden section-container sm:w-full justify-between space-x-8 lg:space-x-16'
        }
      >
        <article
          className={
            ' snap-center min-w-[80vw] sm:min-w-min sm:basis-full flex flex-col py-8 sm:py-16'
          }
        >
          <div
            className={
              ' drop-shadow-3xl bg-zinc-800 hover:drop-shadow-4xl grow border-t border-indigo-400 duration-700 p-8 sm:py-16  rounded-3xl'
            }
          >
            <div className={'space-y-8 relative'}>
              <div className={'min-h-[4rem] flex'}>
                <Image
                  src={holding}
                  alt={'Piotr Szczypka'}
                  className={'m-auto'}
                  placeholder={'blur'}
                />
              </div>
              <div className={'relative'}>
                <h3 className={'text-right'}>20/09/2019</h3>
              </div>

              <p>
                First journey as a programmer and to be more specific as a
                junior Front end Developer. Made hardest decision in my life:
                React or Angular. Getting started with road map of web
                development
              </p>
            </div>
          </div>
          <div className={'flex items-end pt-8'}>
            <h2 className={'text-center  text-xl justify-self-center mx-auto'}>
              Internship
            </h2>
          </div>
        </article>
        <article
          className={
            ' snap-center min-w-[80vw] sm:min-w-min sm:basis-full flex flex-col py-8 sm:py-16'
          }
        >
          <div
            className={
              ' drop-shadow-3xl bg-zinc-800 hover:drop-shadow-4xl grow border-t border-indigo-400 duration-700 p-8 sm:py-16  rounded-3xl'
            }
          >
            <div className={'space-y-8 relative'}>
              <div className={'min-h-[4rem] flex'}>
                <Image
                  src={holding}
                  alt={'Piotr Szczypka'}
                  className={'m-auto'}
                  placeholder={'blur'}
                />
              </div>
              <div className={'relative'}>
                <h3 className={'text-right'}>20/09/2019</h3>
              </div>

              <p>
                First journey as a programmer and to be more specific as a
                junior Front end Developer. Made hardest decision in my life:
                React or Angular. Getting started with road map of web
                development
              </p>
            </div>
          </div>
          <div className={'flex items-end pt-8'}>
            <h2 className={'text-center  text-xl justify-self-center mx-auto'}>
              Internship
            </h2>
          </div>
        </article>
        <article
          className={
            ' snap-center min-w-[80vw] sm:min-w-min sm:basis-full flex flex-col py-8 sm:py-16'
          }
        >
          <div
            className={
              ' drop-shadow-3xl bg-zinc-800 hover:drop-shadow-4xl grow border-t border-indigo-400 duration-700 p-8 sm:py-16  rounded-3xl'
            }
          >
            <div className={'space-y-8 relative'}>
              <div className={'min-h-[4rem] flex'}>
                <Image
                  src={holding}
                  alt={'Piotr Szczypka'}
                  className={'m-auto'}
                  placeholder={'blur'}
                />
              </div>
              <div className={'relative'}>
                <h3 className={'text-right'}>20/09/2019</h3>
              </div>

              <p>
                First journey as a programmer and to be more specific as a
                junior Front end Developer. Made hardest decision in my life:
                React or Angular. Getting started with road map of web
                development
              </p>
            </div>
          </div>
          <div className={'flex items-end pt-8'}>
            <h2 className={'text-center  text-xl justify-self-center mx-auto'}>
              Internship
            </h2>
          </div>
        </article>
      </div>
    </>
  );
}
