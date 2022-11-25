'use client';
import { useContext } from 'react';
import { ContactContext } from '../../../context/ContactContext';
import { ProjectSubjects } from '../../../lib/types';

import FancyButton from '../../FancyButton';

const subjects: ProjectSubjects[] = [
  { slug: 'website', name: 'Website' },
  { slug: 'mobile', name: 'Mobile App' },
  { slug: 'invasion', name: 'World Invasion' }
];

export default function Subject() {
  const { setProjectSubject } = useContext(ContactContext);

  return (
    <>
      <div className={' grid gap-8'}>
        {subjects.map(({ name, slug }) => (
          <FancyButton key={name} onClick={() => setProjectSubject(slug)}>
            {name}
          </FancyButton>
        ))}
      </div>
    </>
  );
}
