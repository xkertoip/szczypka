'use client';
import { useContext } from 'react';
import { ContactContext } from '../../../context/ContactContext';
import { ProjectSubjects } from '../../../lib/types';

import workImage from '../../../../public/images/contact/work.jpg';
import projectImage from '../../../../public/images/contact/project.jpg';
import hiImage from '../../../../public/images/contact/sea.jpg';

const subjects: ProjectSubjects[] = [
  { slug: 'website', name: 'Website', image: workImage },
  { slug: 'mobile', name: 'Mobile App', image: projectImage },
  { slug: 'invasion', name: 'World Invasion', image: hiImage }
];

export default function Subject() {
  const { setProjectSubject } = useContext(ContactContext);

  return (
    <>
      <div className={' grid gap-8'}>
        {subjects.map(({ name, slug, image }) => (
          /*  <div key={name} onClick={() => setProjectSubject(slug)}>
            <ContactPickerCard slug={slug} name={name} image={image} />
          </div>*/
          <button
            key={name}
            onClick={() => setProjectSubject(slug)}
            className={
              'btn-primary__before btn-primary btn-primary__after mx-auto'
            }
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
}
