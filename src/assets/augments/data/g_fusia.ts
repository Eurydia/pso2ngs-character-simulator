import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_FUSIA: Augment[] = [];

const makeAugmentFusia = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.FUSIA,
    [GroupEnumAugment.FUSIA],
    getAwareStatObject,
    searchable_terms,
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
    [
      StatEnum.WEAPON_MELEE,
      StatEnum.WEAPON_RANGED,
      StatEnum.WEAPON_TECHNIQUE,
    ],
  ),
);
