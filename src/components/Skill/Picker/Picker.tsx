'use client';

import Card from './Card';
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
import useRandomNumber from '../../../utils/useRandomNumber';

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

export default function Picker() {
  const { currentNumber, handleClick } = useRandomNumber({
    min: frameworks[0].uniqueNumber,
    max: frameworks.length
  });
  return (
    <>
      <div
        className={
          'flex flex-wrap justify-center  gap-4 z-2 relative  relative py-16'
        }
      >
        {frameworks.map(({ image, uniqueNumber, name }) => (
          <Card
            uniqueNumber={uniqueNumber}
            image={image}
            name={name}
            handler={handleClick}
            currentNumber={currentNumber}
            key={uniqueNumber}
          />
        ))}
      </div>
    </>
  );
}
