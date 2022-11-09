'use client';

import useRandomNumber from '../../utils/useRandomNumber';
import Card from './Picker/Card';
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
import useFindEqualUniqueNumber from '../../utils/useFindEqual';

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
  const { currentRandomNumber, handleClick } = useRandomNumber({
    min: frameworks[0].uniqueNumber,
    max: frameworks.length
  });
  const currentFramework = useFindEqualUniqueNumber({
    array: frameworks,
    compare: currentRandomNumber
  });

  return (
    <>
      <div
        className={
          'relative  w-[200px] h-[200px] sm:min-w-[250px] sm:min-h-[250px] border border-indigo-400 rounded-3xl overflow-hidden flex justify-center items-center m-auto'
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
          'flex flex-wrap justify-center  gap-4 z-2 relative  relative'
        }
      >
        {frameworks.map(({ image, uniqueNumber, name }) => (
          <Card
            uniqueNumber={uniqueNumber}
            image={image}
            name={name}
            handler={handleClick}
            currentNumber={currentRandomNumber}
            key={uniqueNumber}
          />
        ))}
      </div>
    </>
  );
}
