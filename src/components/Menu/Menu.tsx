import Hamburger from './Hamburger';
import Wrapper from './Wrapper';
import { lazy } from 'react';

const Content = lazy(() => import('./Content'));

export default function Menu() {
  return (
    <>
      <Hamburger />
      <Wrapper>
        <Content />
      </Wrapper>
    </>
  );
}
