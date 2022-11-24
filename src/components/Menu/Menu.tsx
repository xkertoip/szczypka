'use client';
import Hamburger from './Hamburger';
import Wrapper from './Wrapper';
import Content from './Content';
import { useState } from 'react';

export default function Menu() {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <div>
      <Hamburger toggle={toggle} toggleMenu={toggleMenu} />
      <Wrapper toggle={toggle}>
        <Content toggleMenu={toggleMenu} />
      </Wrapper>
    </div>
  );
}
