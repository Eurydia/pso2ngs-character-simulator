import { StatObject } from "../../../types";
import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeFusia = (
  name: string,
  level: number,
  stats: StatObject,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.FUSIA,
    [GroupEnum.FUSIA],
    stats,
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
