import { FrameworkObject, ProjectObject, WorkplaceObject } from './types';
import react from 'public/images/react.png';
import next from 'public/images/next.png';
import html from 'public/images/html.png';
import css from 'public/images/css.png';
import js from 'public/images/js.png';
import ts from 'public/images/ts.png';
import graphql from 'public/images/graphql.png';
import jira from 'public/images/jira.png';
import railway from 'public/images/railway.png';
import tailwind from 'public/images/tailwind.png';
import figma from 'public/images/figma.png';
import wordpress from 'public/images/wordpress.png';
import holding from 'public/images/workplace/images/holding1.png';
import amnisLogo from 'public/images/workplace/images/amniscode.png';
import szczypka from 'public/images/workplace/images/logoPS_light.png';
import bierowiec from 'public/images/projects/images/Bierowiec.jpg';
import amnis from 'public/images/projects/images/AmnisCode.jpg';
import amnisBlog from 'public/images/projects/images/AmnisBlog.jpg';
import folio from 'public/images/projects/images/folio.jpg';

export const frameworks: FrameworkObject[] = [
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

export const workplaces: WorkplaceObject[] = [
  {
    image: holding,
    time: '20/09/2019',
    name: 'holding 1',
    description:
      'First journey as a programmer and to be more specific as a junior Front end Developer. Made hardest decision in my life: React or Angular. Getting started with road map of web development',
    job: 'Internship'
  },
  {
    image: amnisLogo,
    time: '20/09/2020',
    name: 'AmnisCode',
    description:
      'First real job as a Junior Front end Developer.  Unpleasant clash with reality, how much knowledge do I still have to acquire',
    job: 'Jr Frontend Dev'
  },
  {
    image: szczypka,
    time: '20/09/2019',
    name: 'Freelance',
    description:
      "Slow way of self-study , browse the StackOverflow, independent creation of websites. I already have some knowledge about web development but still i discover that i don't know everything",
    job: 'Freelance'
  }
];

export const cards: ProjectObject[] = [
  {
    title: 'folio',
    image: folio,
    link: '',
    technology: ['react', 'nextjs', 'tailwind']
  },
  {
    title: 'bierowiec',
    image: bierowiec,
    link: '',
    technology: ['react', 'nextjs', 'tailwind']
  },
  {
    title: 'AmnisCode',
    image: amnis,
    link: '',
    technology: ['react', 'nextjs', 'tailwind']
  },
  {
    title: 'AnmnisCode Blog',
    image: amnisBlog,
    link: '',
    technology: ['wordpress', 'css']
  }
];
