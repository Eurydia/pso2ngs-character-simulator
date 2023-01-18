import { createContext } from "react";
import { ActionContext } from "../assets";

export const AppContext = createContext<{
  context: ActionContext;
  updateContext: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
}>({
  context: ActionContext.createContext(),
  updateContext: (next_context) => {
    return;
  },
});
