'use client';
import { useContext } from 'react';
import { ContactContext } from '../../../context/ContactContext';
import { ProjectSubjects } from '../../../lib/types';

import workImage from '../../../../public/images/contact/work.jpg';
import projectImage from '../../../../public/images/contact/project.jpg';
import hiImage from '../../../../public/images/contact/sea.jpg';
import ContactSubject from '../../ContactSubject';

const subjects: ProjectSubjects[] = [
  { slug: 'website', name: 'Website', image: workImage },
  { slug: 'mobile', name: 'Mobile App', image: projectImage },
  { slug: 'invasion', name: 'World Invasion', image: hiImage }
];

export default function Subject() {
  const { setProjectSubject } = useContext(ContactContext);

  return (
    <>
      <h2 className={'text-2xl'}>
        Which kind of project do you want talk about:
      </h2>
      <div className={' grid md:grid-cols-3 gap-8'}>
        {subjects.map(({ name, slug, image }) => (
          <ContactSubject
            key={name}
            slug={slug}
            name={name}
            image={image}
            onClick={() => setProjectSubject(slug)}
          />
        ))}
      </div>
    </>
  );
}
