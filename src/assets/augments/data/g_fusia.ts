import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

const data: Augment[] = [];

const makeFusia = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.FUSIA,
    [GroupEnumAugment.FUSIA],
    (_) => statObject(stat),
  );
};

// --------------------------------------
// fusia
data.push(
  makeFusia("Megas Fusia", 0, {
    [StatEnum.CORE_BP]: 4,
    [StatEnum.WEAPON_MELEE]: 1.01,
    [StatEnum.WEAPON_RANGED]: 1.01,
    [StatEnum.WEAPON_TECHNIQUE]: 1.01,
  }),
);

export default data;
