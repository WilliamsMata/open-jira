import { PropsWithChildren, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideBarOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideBarOpen: false,
  isAddingEntry: false,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const closeSideMenu = () => {
    dispatch({ type: "UI - CloseSidebar" });
  };

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const setIsAddingEntry = (status: boolean) => {
    dispatch({ type: "UI - SetAddingEntry", payload: status });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        // methods
        closeSideMenu,
        openSideMenu,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
