import { UIState } from "./";

type UIActionType =
  | {
      type: "UI - Open Sidebar" | "UI - CloseSidebar";
    }
  | { type: "UI - SetAddingEntry"; payload: boolean }
  | { type: "UI - Start Dragging" | "UI - End Dragging" };

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

    case "UI - Start Dragging":
      return {
        ...state,
        isDragging: true,
      };

    case "UI - End Dragging":
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
