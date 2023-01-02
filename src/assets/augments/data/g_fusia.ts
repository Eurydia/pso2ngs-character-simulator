import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_FUSIA: Augment[] = [];

const makeAugmentFusia = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.FUSIA,
    [GroupEnumAugment.FUSIA],
    (_) => {
      return statObject(stat);
    },
  );
};

// --------------------------------------
// fusia
G_FUSIA.push(
  makeAugmentFusia("Megas Fusia", 0, {
    [StatEnum.CORE_BP]: 4,
    [StatEnum.WEAPON_MELEE]: 1.01,
    [StatEnum.WEAPON_RANGED]: 1.01,
    [StatEnum.WEAPON_TECHNIQUE]: 1.01,
  }),
);
