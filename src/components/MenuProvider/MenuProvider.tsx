'use client';
import { ReactNode, useState } from 'react';
import MenuContext from '../MenuContext/MenuContext';

type Props = {
  children: ReactNode;
};

export default function MenuProvider({ children }: Props) {
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
