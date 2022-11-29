'use client';
import { ReactNode } from 'react';
import { LazyMotion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const loadFeatures = () =>
  import('../utils/featuresMotion').then(res => res.default);

export default function Providers({ children }: Props) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
