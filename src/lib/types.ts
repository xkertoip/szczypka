import { StaticImageData } from 'next/image';

export interface ContactRoutes {
  name: string;
  slug: 'work' | 'project' | 'hi';
  image: StaticImageData;
}

export interface ProjectSubjects {
  name: string;
  slug: 'website' | 'mobile' | 'invasion';
  image: StaticImageData;
}
