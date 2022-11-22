import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import { ProjectObject } from '../../../lib/types';
import InfiniteLoop from '../../InfiniteLoop';

export default function Project({ image, title, technology }: ProjectObject) {
  return (
    <>
      <div
        className={
          'space-y-4 sm:space-y-8 pb-8 sm:pb-0 max-w-[450px] max-h-[350px] mx-auto w-full'
        }
      >
        <Link href={'/contact'}>
          <Card maxWidth={450} maxHeight={350}>
            <Image src={image} alt={'Piotr Szczypka'} placeholder={'blur'} />
          </Card>
        </Link>
        <InfiniteLoop>
          <h4 className={'flex  text-secondary'}>
            {technology.map(element => (
              <span className={'mr-4 whitespace-nowrap'} key={element}>
                {element}
              </span>
            ))}
          </h4>
        </InfiniteLoop>
        <h3 className={'text-2xl text-right capitalize'}>{title}</h3>
      </div>
    </>
  );
}
