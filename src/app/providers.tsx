'use client';
import { ReactNode } from 'react';
import { LazyMotion } from 'framer-motion';
import { MenuProvider } from '../context/MenuContext/MenuContext';

type Props = {
  children: ReactNode;
};

const loadFeatures = () =>
  import('../utils/featuresMotion').then(res => res.default);

export default function Providers({ children }: Props) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MenuProvider>{children}</MenuProvider>
    </LazyMotion>
  );
}
