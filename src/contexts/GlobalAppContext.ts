import { createContext } from "react";
import { ActionContext } from "../assets";

export const GlobalAppContext = createContext<ActionContext>(
  ActionContext.createContext(),
);
