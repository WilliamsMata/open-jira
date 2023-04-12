import { createContext } from "react";

interface ContextProps {
  sideBarOpen: boolean;
  isAddingEntry: boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
  setIsAddingEntry: (status: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
