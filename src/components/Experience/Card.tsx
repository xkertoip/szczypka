import Image from 'next/image';

type Props = {
  image: any;
  time: string;
  description: string;
  job: string;
  name: string;
};

export default function Card({ job, description, time, image }: Props) {
  return (
    <>
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
            <Image
              src={image}
              alt={'Piotr Szczypka'}
              className={' mx-auto w-auto h-[64px]'}
            />
            <div className={'relative'}>
              <h3 className={'text-right'}>{time}</h3>
            </div>

            <p>{description}</p>
          </div>
        </div>
        <div className={'flex items-end pt-8'}>
          <h2 className={'text-center  text-xl justify-self-center mx-auto'}>
            {job}
          </h2>
        </div>
      </article>
    </>
  );
}
