'use client';
import InfiniteLoop from '../../InfiniteLoop';
import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';

import Perspective3d from '../../Perspective3d';
import useDetectDevice from '../../../utils/useDetectDevice';

type Props = {
  link: string;
  image: any;
  technology: any[];
  title: string;
};

export default function Project({ link, image, title, technology }: Props) {
  const isMobile = useDetectDevice();
  return (
    <>
      <div className={'space-y-4 sm:space-y-8 pb-8 sm:pb-0'}>
        <Link href={'/contact'}>
          <Card>
            <Image
              src={image}
              alt={'Piotr Szczypka'}
              sizes="(max-width: 768px) 90vw,
                          40vw"
              placeholder={'blur'}
            />
          </Card>
        </Link>

        <h4 className={'flex  text-secondary'}>
          <InfiniteLoop>
            {technology.map(element => (
              <span className={'mr-4 whitespace-nowrap'} key={element}>
                {element}
              </span>
            ))}
          </InfiniteLoop>
        </h4>
        <h3 className={'text-2xl text-right capitalize'}>{title}</h3>
      </div>
    </>
  );
}