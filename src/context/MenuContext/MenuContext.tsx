'use client';
import { ReactNode, useState, createContext, useCallback } from 'react';

interface MenuContextType {
  toggle: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextType>({
  toggle: false,
  toggleMenu: () => {}
});
type Props = {
  children: ReactNode;
};

export function MenuProvider({ children }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <MenuContext.Provider
      value={{
        toggle,
        toggleMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
