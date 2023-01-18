import { useEffect, useState } from "react";
import { ActionContext } from "../assets";
import { isValidJSON } from "./utility";

const saveContext = (
  storage_key: string,
  data: ActionContext,
): void => {
  const data_string: string = JSON.stringify(data);
  localStorage.setItem(storage_key, data_string);
};

const loadData = (storage_key: string): ActionContext => {
  const result: ActionContext = ActionContext.createContext();

  const loaded_data: string | null =
    localStorage.getItem(storage_key);
  if (loaded_data === null) {
    return result;
  }
  if (!isValidJSON(loaded_data)) {
    return result;
  }
  const data: Object | unknown = JSON.parse(loaded_data);
  if (typeof data !== "object") {
    return result;
  }
  return { ...result, ...data };
};

export const useActionContext = (
  storage_key: string,
): {
  context: ActionContext;
  setContext: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
} => {
  const [value, setValue] = useState((): ActionContext => {
    return loadData(storage_key);
  });

  useEffect(() => {
    saveContext(storage_key, value);
  }, [value]);

  return { context: value, setContext: setValue };
};
