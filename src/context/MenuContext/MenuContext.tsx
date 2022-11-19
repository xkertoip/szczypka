'use client';
import { ReactNode, useState, createContext } from 'react';

interface MenuContextType {
  toggle: boolean;
  setToggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextType>({
  toggle: false,
  setToggleMenu: () => {}
});
type Props = {
  children: ReactNode;
};

export function MenuProvider({ children }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  function setToggleMenu() {
    setToggle(prevState => !prevState);
  }

  return (
    <MenuContext.Provider
      value={{
        toggle,
        setToggleMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
