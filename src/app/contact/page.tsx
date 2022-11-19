'use client';
import ContactSubject from '../../components/ContactSubject';
import workImage from '../../../public/images/contact/work.jpg';
import projectImage from '../../../public/images/contact/project.jpg';
import hiImage from '../../../public/images/contact/sea.jpg';
import { ContactRoutes } from '../../lib/types';
import { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';

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
      <div className={' grid md:grid-cols-3 gap-8'}>
        {routes.map(({ slug, name, image }) => (
          <ContactSubject
            key={name}
            name={name}
            slug={slug}
            image={image}
            onClick={() => setSubject(slug)}
          />
        ))}
      </div>
    </>
  );
}
