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

export default function Picker() {
  const { currentNumber, handleClick } = useRandomNumber({
    min: 1,
    max: 12
  });
  return (
    <>
      <div
        className={
          'flex flex-wrap justify-center  gap-4 z-2 relative  relative py-16'
        }
      >
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={react}
          name={'react'}
          uniqueNumber={1}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={js}
          name={'Java Script'}
          uniqueNumber={2}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={ts}
          name={'Type Script'}
          uniqueNumber={3}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={next}
          name={'nextJS'}
          uniqueNumber={4}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={html}
          name={'HTML'}
          uniqueNumber={5}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={css}
          name={'CSS'}
          uniqueNumber={6}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={figma}
          name={'figma'}
          uniqueNumber={7}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={jira}
          name={'jira'}
          uniqueNumber={8}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={railway}
          name={'railway'}
          uniqueNumber={9}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={wordpress}
          name={'wordpress'}
          uniqueNumber={10}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={tailwind}
          name={'tailwind'}
          uniqueNumber={11}
        />
        <Card
          handler={handleClick}
          currentNumber={currentNumber}
          image={graphql}
          name={'graphql'}
          uniqueNumber={12}
        />
      </div>
    </>
  );
}
