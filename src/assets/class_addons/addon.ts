import { ActionContext } from "../context";
import { StatObject } from "../stat";

export type Addon = {
  name: string;
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject;
};

export const Addon = {};

export const addon = (
  name: string,
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject,
): Addon => {
  const result: Addon = {
    name,
    getAwareStatObject,
  };

  return result;
};
