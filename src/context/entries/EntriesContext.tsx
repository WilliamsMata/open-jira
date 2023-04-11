import { createContext } from "react";

interface ContextProps {
  entries: []; //todo: Falta el tipo de dato del array
}

export const EntriesContext = createContext({} as ContextProps);
