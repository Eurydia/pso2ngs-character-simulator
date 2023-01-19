import { ActionContext } from "../ContextAction";
import { statObject, StatObject } from "../stat";
import { GroupEnumFixa } from "./groupEnum";

const LOOKUP_FIXA: { [key: string]: Fixa } = {};

export type Fixa = Readonly<{
  name: string;
  level: string;
  label: string;
  group: GroupEnumFixa;
  getAwareStatObject: (ctx: ActionContext) => StatObject;
}>;

export const Fixa = {
  toString: (fixa: Fixa | null): string => {
    if (fixa === null) {
      return JSON.stringify(null);
    }
    return JSON.stringify(fixa.label);
  },

  fromLabel: (label: string): Fixa | null => {
    if (label in LOOKUP_FIXA) {
      return LOOKUP_FIXA[label];
    }
    return null;
  },

  getStatObject: (
    ctx: ActionContext,
    fixa: Fixa | null,
  ): StatObject => {
    if (fixa === null) {
      return statObject();
    }
    return fixa.getAwareStatObject(ctx);
  },
};

export const fixa = (
  name: string,
  fixa_level: number,
  group: GroupEnumFixa,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Fixa => {
  const level = fixa_level.toString();
  const label = `${name} Lv.${level}`.trimEnd();

  const result: Fixa = {
    name,
    level,
    label,
    group,
    getAwareStatObject,
  };

  LOOKUP_FIXA[label] = result;

  return result;
};
