import { ActionContext } from "../context";
import { StatObject } from "../stat";
import { GroupEnumFixa } from "./groupEnum";

export type Fixa = {
  name: string;
  level: string;
  label: string;
  group: GroupEnumFixa;
  getStatObject: (ctx: ActionContext) => StatObject;
};

export const fixa = (
  name: string,
  level: number,
  group: GroupEnumFixa,
  getStatObject: (ctx: ActionContext) => StatObject,
): Fixa => {
  const label = `${name} ${level}`.trimEnd();
  const result: Fixa = {
    name,
    level: level.toString(),
    label,
    group,
    getStatObject: getStatObject,
  };

  return result;
};
