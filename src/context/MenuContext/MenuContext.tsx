'use client';
import { ReactNode, useState, createContext } from 'react';

interface MenuContextType {
  openMenu: boolean;
  handleOpen: () => void;
}

export const MenuContext = createContext<MenuContextType>({
  openMenu: false,
  handleOpen: () => null
});
type Props = {
  children: ReactNode;
};

export function MenuProvider({ children }: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleOpen = () => {
    setOpenMenu(currentState => !currentState);
  };

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        handleOpen: handleOpen
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
