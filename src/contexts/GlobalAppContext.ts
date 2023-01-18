import { createContext } from "react";
import { ActionContext } from "../assets";

export const GlobalAppContext = createContext<{
  context: ActionContext;
  setContext: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
}>({
  context: ActionContext.createContext(),
  setContext: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => {
    return;
  },
});
