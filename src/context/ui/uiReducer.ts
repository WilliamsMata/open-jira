import { UIState } from "./";

type UIActionType = {
  type: "UI - Open Sidebar" | "UI - CloseSidebar";
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideBarOpen: true,
      };

    case "UI - CloseSidebar":
      return {
        ...state,
        sideBarOpen: false,
      };

    default:
      return state;
  }
};
