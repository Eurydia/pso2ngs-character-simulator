import { StatObject, statObject } from "../stat";
import { ActionContext } from "../ContextAction";

export type Potential = Readonly<{
  name: string;
  enhancement_max: number;
  getAwareStatObject: (
    ctx: ActionContext,
    level: number,
  ) => StatObject;
}>;

export const Potential = {
  getStateObject: (
    ctx: ActionContext,
    potential: Potential,
    potential_level: number,
  ): StatObject => {
    if (
      potential_level < 1 ||
      potential_level > potential.enhancement_max
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
    enhancement_max: level_max,
    getAwareStatObject,
  };

  return result;
};
