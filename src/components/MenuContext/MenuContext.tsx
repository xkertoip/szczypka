'use client';
import { createContext } from 'react';

interface MenuContextType {
  openMenu: boolean;
  handleOpen: () => void;
}

const MenuContext = createContext<MenuContextType>({
  openMenu: false,
  handleOpen: () => null
});
export default MenuContext;
