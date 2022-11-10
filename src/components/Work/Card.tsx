import Link from 'next/link';
import InfiniteLoop from '../InfiniteLoop';
import Image from 'next/image';

type Props = {
  link: string;
  image: any;
  technology: any[];
  title: string;
};

export default function Card({ link, image, title, technology }: Props) {
  return (
    <>
      <div className={'basis-1/3'}>
        <div
          className={
            'relative border border-indigo-400 rounded-3xl overflow-hidden'
          }
        >
          <div className={'relative h-auto  z-[-1]'}>
            <Image
              src={image}
              alt={'Piotr Szczypka'}
              sizes="(max-width: 768px) 350px,
                          450px"
            />
          </div>
          <div
            className={
              'absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[70px] h-[70px] rounded-full flex items-center justify-center z-[-1] drop-shadow-3xl hover:drop-shadow-4xl'
            }
          >
            <Link href={'/projects/' + link}>
              <h3 className={'capitalize'}>check</h3>
            </Link>
          </div>
        </div>

        <div>
          <h3 className={'text-2xl text-center'}>{title}</h3>
          <h4 className={'flex  text-secondary'}>
            <InfiniteLoop>
              {technology.map(element => (
                <span className={'mr-4 whitespace-nowrap'} key={element}>
                  {element}
                </span>
              ))}
            </InfiniteLoop>
          </h4>
        </div>
      </div>
    </>
  );
}
