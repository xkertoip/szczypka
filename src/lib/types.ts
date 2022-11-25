import { StaticImageData } from 'next/image';

export interface ContactRoutes {
  name: string;
  slug: 'work' | 'project' | 'hi';
  image: StaticImageData;
}

export interface ProjectSubjects {
  name: string;
  slug: 'website' | 'mobile' | 'invasion';
  image?: StaticImageData;
}

export interface WorkplaceObject {
  image: StaticImageData;
  time: string;
  description: string;
  job: string;
  name: string;
}

export interface FrameworkObject {
  image: StaticImageData;
  name: string;
  uniqueNumber: number;
}

export interface ProjectObject {
  title: string;
  image: StaticImageData;
  link: string;
  technology: string[];
}
