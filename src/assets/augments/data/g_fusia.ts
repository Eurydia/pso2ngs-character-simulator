import { ActionContext } from "../../../contexts/ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_FUSIA: Augment[] = [];

const makeAugmentFusia = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.FUSIA,
    [GroupEnumAugment.FUSIA],
    getAwareStatObject,
  );
};

// --------------------------------------
// fusia
G_FUSIA.push(
  makeAugmentFusia(
    "Megas Fusia",
    0,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 4,
        [StatEnum.WEAPON_MELEE]: 1.01,
        [StatEnum.WEAPON_RANGED]: 1.01,
        [StatEnum.WEAPON_TECHNIQUE]: 1.01,
      });
    },
  ),
);
