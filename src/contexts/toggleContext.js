import { createContext, useReducer } from "react";
import ToggleMenuReducer from "./toggleReducer";

const INITIAL_STATE = {
  toggleMenu: false,
};

export const ToggleMenuContext = createContext(INITIAL_STATE);

export const ToggleMenuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToggleMenuReducer, INITIAL_STATE);
  return (
    <ToggleMenuContext.Provider
      value={{ toggleMenu: state.toggleMenu, dispatchMenu: dispatch }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
};
