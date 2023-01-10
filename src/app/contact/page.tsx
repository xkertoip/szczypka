'use client';
import ContactSubject from '../../components/ContactPickerCard';
import workImage from '../../../public/images/contact/images/work.jpg';
import projectImage from '../../../public/images/contact/images/project.jpg';
import hiImage from '../../../public/images/contact/images/sea.jpg';
import Link from 'next/link';
import { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import { ContactRoutes } from '../../lib/types';

const routes: ContactRoutes[] = [
  {
    name: 'work offer',
    slug: 'work',
    image: workImage
  },
  {
    name: 'project',
    slug: 'project',
    image: projectImage
  },
  {
    name: 'say hi',
    slug: 'hi',
    image: hiImage
  }
];

export default function Contact() {
  const { setSubject } = useContext(ContactContext);
  return (
    <>
      <div
        className={
          ' flex flex-col md:justify-center gap-8 md:min-h-screen py-8 md:py-16 overflow-hidden'
        }
      >
        {routes.map(({ slug, name, image }) => (
          <Link
            key={name}
            href={`/contact/${slug}`}
            onClick={() => setSubject(slug)}
            className={'w-full'}
          >
            <ContactSubject name={name} slug={slug} image={image} />
          </Link>
        ))}
      </div>
    </>
  );
}
