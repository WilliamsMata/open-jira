import { createContext } from "react";

interface ContextProps {
  sideBarOpen: boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
