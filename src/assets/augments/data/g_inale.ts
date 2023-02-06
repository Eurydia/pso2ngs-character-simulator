import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_INALE: Augment[] = [];

const makeAugmentFusia = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.INALE,
    [GroupEnumAugment.INALE],
    getAwareStatObject,
    searchable_terms,
  );
};

// --------------------------------------
// Halphinale
G_INALE.push(
  makeAugmentFusia(
    "Halphinale",
    0,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 13,
        [StatEnum.CORE_HP]: 15,
        [StatEnum.CORE_PP]: 5,
        [StatEnum.WEAPON_MELEE]: 1.04,
        [StatEnum.WEAPON_RANGED]: 1.04,
        [StatEnum.WEAPON_TECHNIQUE]: 1.04,
      });
    },
    [
      StatEnum.CORE_HP,
      StatEnum.CORE_PP,
      StatEnum.WEAPON_MELEE,
      StatEnum.WEAPON_RANGED,
      StatEnum.WEAPON_TECHNIQUE,
    ],
  ),
);
