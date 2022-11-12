'use client';

import Card from './Card';
import Slider from './Slider';
import react from '/public/images/frameworks/react.png';
import next from '/public/images/frameworks/next.png';
import html from '/public/images/frameworks/html.png';
import css from '/public/images/frameworks/css.png';
import js from '/public/images/frameworks/js.png';
import ts from '/public/images/frameworks/ts.png';
import graphql from '/public/images/frameworks/graphql.png';
import jira from '/public/images/frameworks/jira.png';
import railway from '/public/images/frameworks/railway.png';
import tailwind from '/public/images/frameworks/tailwind.png';
import figma from '/public/images/frameworks/figma.png';
import wordpress from '/public/images/frameworks/wordpress.png';
import useGetRandomFramework from '../../utils/useGetRandomFramework';

const frameworks = [
  {
    image: react,
    name: 'react',
    uniqueNumber: 1
  },
  {
    image: next,
    name: 'nextJS',
    uniqueNumber: 2
  },
  {
    image: ts,
    name: 'TypeScript',
    uniqueNumber: 3
  },
  {
    image: tailwind,
    name: 'TailwindCSS',
    uniqueNumber: 4
  },
  {
    image: html,
    name: 'html',
    uniqueNumber: 5
  },
  {
    image: css,
    name: 'CSS',
    uniqueNumber: 6
  },
  {
    image: js,
    name: 'JavaScript',
    uniqueNumber: 7
  },
  {
    image: wordpress,
    name: 'Wordpress',
    uniqueNumber: 8
  },
  {
    image: graphql,
    name: 'graphQL',
    uniqueNumber: 9
  },
  {
    image: jira,
    name: 'jira',
    uniqueNumber: 10
  },
  {
    image: railway,
    name: 'Railway',
    uniqueNumber: 11
  },
  {
    image: figma,
    name: 'Figma',
    uniqueNumber: 12
  }
];

export default function Content() {
  const { currentFramework, handleClick } = useGetRandomFramework({
    array: frameworks,
    max: frameworks.length
  });

  return (
    <>
      <div
        className={
          ' sm:basis-1/3 relative bg-zinc-800 max-w-[80%] m-auto border-t border-indigo-400 rounded-3xl drop-shadow-3xl overflow-hidden flex justify-center items-center'
        }
      >
        <Slider
          name={currentFramework.name}
          number={currentFramework.uniqueNumber}
          logo={currentFramework.image}
        />
      </div>
      <div
        className={
          'sm:basis-2/3 flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 relative pt-8 sm:pt-0'
        }
      >
        {frameworks.map(({ image, uniqueNumber, name }) => (
          <Card
            uniqueNumber={uniqueNumber}
            image={image}
            name={name}
            handler={handleClick}
            currentFrameworkUniqueNumber={currentFramework.uniqueNumber}
            key={uniqueNumber}
          />
        ))}
      </div>
    </>
  );
}
