import { UIState } from "./";

type UIActionType =
  | {
      type: "UI - Open Sidebar" | "UI - CloseSidebar";
    }
  | { type: "UI - SetAddingEntry"; payload: boolean };

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

    case "UI - SetAddingEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    default:
      return state;
  }
};
