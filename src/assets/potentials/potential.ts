import { StatObject, statObject } from "../stat";
import { ActionContext } from "../context";

export type Potential = {
  name: string;
  level_max: number;
  getAwareStatObject: (
    ctx: ActionContext,
    level: number,
  ) => StatObject;
};

export const Potential = {
  getStateObject: (
    ctx: ActionContext,
    potential: Potential,
    potential_level: number,
  ): StatObject => {
    if (
      potential_level < 1 ||
      potential_level > potential.level_max
    ) {
      return statObject();
    }

    const level_index: number = potential_level - 1;
    return potential.getAwareStatObject(ctx, level_index);
  },
};

export const potential = (
  name: string,
  level_max: number,
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject,
): Potential => {
  const result: Potential = {
    name,
    level_max,
    getAwareStatObject,
  };

  return result;
};
