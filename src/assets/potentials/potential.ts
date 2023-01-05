import { StatObject, statObject } from "../stat";
import { ActionContext } from "../context";

export type Potential = {
  name: string;
  level_max: number;
  getStatObject: (ctx: ActionContext, level: number) => StatObject;
};

export const potential = (
  name: string,
  level_max: number,
  getterFunction: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject,
): Potential => {
  const getStatObject = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    if (level < 1 || level > level_max) {
      return statObject();
    }
    const level_index: number = level - 1;
    return getterFunction(ctx, level_index);
  };

  const result: Potential = {
    name,
    level_max,
    getStatObject,
  };

  return result;
};
