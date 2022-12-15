'use client';
import { m } from 'framer-motion';
import React, { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuContext from '../../../context/MenuContext';

const item = {
  close: {
    translateY: '100%',
    transition: {
      ease: 'linear'
    }
  },
  open: {
    translateY: 0,
    transition: {
      ease: 'linear'
    }
  }
};

/*const routes = [
  {
    slug: '/',
    name: 'home'
  },
  {
    slug: '/contact',
    name: 'contact'
  }
];*/

export default function Content() {
  const pathname = usePathname();
  const { changeToggle } = useContext(MenuContext);

  return (
    <>
      <div className={'overflow-hidden'}>
        <m.h2 variants={item} className={'section-indicator'}>
          N&#176;0&nbsp;menu
        </m.h2>
      </div>
      <nav>
        <menu className={'overflow-hidden space-y-4'}>
          <li
            onClick={changeToggle}
            className={'overflow-hidden flex justify-end'}
          >
            <Link href={'/'}>
              <m.p
                className={`text-4xl md:text-6xl  capitalize ${
                  '/' === pathname ? 'text-red-400' : null
                }`}
                variants={item}
                whileHover={{ color: '#818cf8' }}
              >
                home
              </m.p>
            </Link>
          </li>
          <li
            onClick={changeToggle}
            className={'overflow-hidden flex justify-end'}
          >
            <Link href={'/contact'}>
              <m.p
                className={`text-4xl md:text-6xl capitalize  ${
                  '/contact' === pathname ? 'text-red-400' : null
                }`}
                variants={item}
                whileHover={{ color: '#818cf8' }}
              >
                contact
              </m.p>
            </Link>
          </li>
        </menu>
      </nav>
      <ul className={'pb-4  md:text-2xl'}>
        <li className={'overflow-hidden '}>
          <m.p variants={item}>Kasinka Mała, 648</m.p>
        </li>
        <li className={'overflow-hidden'}>
          <m.p variants={item}>
            <m.a href="tel:+48536777364" whileHover={{ color: '#818cf8' }}>
              +48 536 777 364
            </m.a>
          </m.p>
        </li>
        <li className={'overflow-hidden'}>
          <m.p variants={item}> Poland</m.p>
        </li>
      </ul>
    </>
  );
}
