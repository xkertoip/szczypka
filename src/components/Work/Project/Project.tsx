import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import { ProjectObject } from '../../../lib/types';
import { lazy } from 'react';

const InfiniteLoop = lazy(() => import('../../InfiniteLoop'));

export default function Project({ image, title, technology }: ProjectObject) {
  return (
    <>
      <div
        className={'pb-8 sm:pb-0 max-w-[450px] max-h-[350px] mx-auto w-full'}
      >
        <h3 className={'text-3xl pb-4 capitalize text-red-400 '}>{title}</h3>
        <Link href={'/contact'}>
          <Card maxWidth={450} maxHeight={350}>
            <Image
              src={image}
              alt={'Piotr Szczypka'}
              placeholder={'blur'}
              width={450}
              height={350}
            />
          </Card>
        </Link>
        <InfiniteLoop>
          <h4 className={'flex text-secondary pt-8'}>
            {technology.map(element => (
              <span
                className={'mr-4 whitespace-nowrap capitalize text-xl'}
                key={element}
              >
                {element}
              </span>
            ))}
          </h4>
        </InfiniteLoop>
      </div>
    </>
  );
}
