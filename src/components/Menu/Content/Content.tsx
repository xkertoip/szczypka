import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const routes = [
  {
    slug: '/',
    name: 'home'
  },
  {
    slug: '/contact',
    name: 'contact'
  }
];
type Props = {
  toggleMenu: () => void;
};

export default function Content({ toggleMenu }: Props) {
  const pathname = usePathname();

  return (
    <>
      <div className={'overflow-hidden'}>
        <motion.h2 variants={item} className={'section-indicator'}>
          N&#176;0&nbsp;menu
        </motion.h2>
      </div>
      <nav>
        <menu className={'overflow-hidden space-y-4'}>
          {routes.map(({ slug, name }) => (
            <li
              key={name}
              onClick={toggleMenu}
              className={'overflow-hidden flex justify-end'}
            >
              <Link href={slug}>
                <motion.p
                  className={`text-4xl md:text-6xl ease-in-out duration-700 capitalize hover:text-indigo-400 ${
                    slug === pathname && 'text-red-400'
                  }`}
                  variants={item}
                >
                  {name}
                </motion.p>
              </Link>
            </li>
          ))}
        </menu>
      </nav>
      <ul className={'pb-4  md:text-2xl'}>
        <li className={'overflow-hidden '}>
          <motion.p variants={item}>Kasinka Mała, 648</motion.p>
        </li>
        <li className={'overflow-hidden'}>
          <motion.p variants={item}>
            <motion.a href="tel:+48536777364" className={'hover:text-red-400'}>
              +48 536 777 364
            </motion.a>
          </motion.p>
        </li>
        <li className={'overflow-hidden'}>
          <motion.p variants={item}> Poland</motion.p>
        </li>
      </ul>
    </>
  );
}
