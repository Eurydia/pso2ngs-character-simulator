import { useEffect, useState } from "react";
import { ActionContext } from "../assets";
import { isValidJSON } from "./utility";

const retrieveData = (storage_key: string): ActionContext => {
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
): [
  ActionContext,
  (
    data: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void,
] => {
  const [value, setValue] = useState<ActionContext>(() => {
    return retrieveData(storage_key);
  });

  useEffect(() => {
    const string_data: string = JSON.stringify(value);
    localStorage.setItem(storage_key, string_data);
  }, [value]);

  return [value, setValue];
};
