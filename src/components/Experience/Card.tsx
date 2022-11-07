import Image from 'next/image';

type Props = {
  image: any;
  time: string;
  description: string;
  job: string;
  name: string;
};

export default function Card({ job, description, time, image, name }: Props) {
  return (
    <>
      <article
        className={
          ' snap-center flex-shrink-0 md:shrink w-full max-w-[250px] flex flex-col space-y-4 py-8'
        }
      >
        <div
          className={
            ' drop-shadow-3xl bg-zinc-800 hover:drop-shadow-4xl grow border border-indigo-400 hover:border-red-400 duration-700 p-4 rounded-3xl'
          }
        >
          <div className={'space-y-4 relative'}>
            <Image
              src={image}
              alt={'Piotr Szczypka'}
              sizes="(max-width: 768px) 150px,
                          200px"
              className={
                ' mx-auto w-auto absolute opacity-30 top-0 left-[50%] translate-x-[-50%]'
              }
            />
            <h2 className={'text-red-400 capitalize text-center text-3xl'}>
              {name}
            </h2>

            <h3 className={'text-right'}>{time}</h3>

            <p>{description}</p>
          </div>
        </div>
        <div className={'flex items-end'}>
          <h2 className={'text-center  text-xl justify-self-center mx-auto'}>
            {job}
          </h2>
        </div>
      </article>
    </>
  );
}
