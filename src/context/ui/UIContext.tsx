import { createContext } from "react";

interface ContextProps {
  sideBarOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
  setIsAddingEntry: (status: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
