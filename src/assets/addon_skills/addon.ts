import { ActionContext } from "../context";
import { StatObject } from "../stat";

export type AddonSkill = {
  name: string;
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject;
};

export const AddonSkill = {};

export const addonSkill = (
  name: string,
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject,
): AddonSkill => {
  const result: AddonSkill = {
    name,
    getAwareStatObject,
  };

  return result;
};
