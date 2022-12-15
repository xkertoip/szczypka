'use client';

import { createContext, ReactNode, useState } from 'react';

type MenuContextType = {
  toggle: boolean;
  changeToggle: () => void;
};

export const MenuContext = createContext<MenuContextType>({
  toggle: false,
  changeToggle: () => {}
});

type Props = {
  children: ReactNode;
};

export function MenuProvider({ children }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  const changeToggle = () => {
    setToggle(prevState => !prevState);
  };

  return (
    <MenuContext.Provider
      value={{
        toggle,
        changeToggle
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
