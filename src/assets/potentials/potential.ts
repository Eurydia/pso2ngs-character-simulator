import { StatEnum, StatObject, statObject } from "../stat";
import { ActionContext } from "../ContextAction";

export type Potential = Readonly<{
  name: string;
  level_max: number;
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
      potential_level > potential.level_max
    ) {
      return statObject();
    }
    const potential_level_index: number = potential_level - 1;
    const stat_potential: StatObject = potential.getAwareStatObject(
      ctx,
      potential_level_index,
    );
    return StatObject.setStat(
      stat_potential,
      StatEnum.CORE_BP,
      potential_level * 10,
    );
  },
};

export const potential = (
  name: string,
  potential_level_max: number,
  getAwareStatObject: (
    ctx: ActionContext,
    potential_level_index: number,
  ) => StatObject,
): Potential => {
  const result: Potential = {
    name,
    level_max: potential_level_max,
    getAwareStatObject,
  };

  return result;
};
