import { PropsWithChildren, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideBarOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideBarOpen: false,
};

export const UIProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const closeSideMenu = () => {
    dispatch({ type: "UI - CloseSidebar" });
  };

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        // methods
        closeSideMenu,
        openSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
