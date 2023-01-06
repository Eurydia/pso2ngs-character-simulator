import { ActionContext } from "../context";
import { StatObject } from "../stat";
import { GroupEnumFixa } from "./groupEnum";

export type Fixa = {
  name: string;
  level: string;
  label: string;
  group: GroupEnumFixa;
  getAwareStatObject: (ctx: ActionContext) => StatObject;
};

export const fixa = (
  name: string,
  fixa_level: number,
  group: GroupEnumFixa,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Fixa => {
  const level = fixa_level.toString();
  const label = `${name} ${level}`.trimEnd();

  const result: Fixa = {
    name,
    level,
    label,
    group,
    getAwareStatObject,
  };

  return result;
};
