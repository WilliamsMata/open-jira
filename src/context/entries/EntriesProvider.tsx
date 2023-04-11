import { PropsWithChildren, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit minima laudantium ipsa nostrum nemo iste sit, numquam aliquam architecto veritatis doloribus et fuga sapiente, dolorum dolore animi cumque quisquam sunt.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, laboriosam dolores aliquid minima repudiandae neque perspiciatis autem iusto error odio fuga eveniet debitis itaque corporis sequi quidem saepe incidunt magnam?",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos voluptas ipsum non nobis iusto, quam veniam, quod, eveniet vitae numquam dicta consectetur! Omnis, soluta vero. Quod odit in fugiat!",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
