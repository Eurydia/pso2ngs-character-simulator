import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentSezun = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.SEZUN,
    [GroupEnum.SEZUN],
    stats,
  );
};

// --------------------------------------

data.push(
  makeAugmentSezun("Sezun augments", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.15,
    [StatEnum.WEAPON_RANGED]: 1.15,
    [StatEnum.WEAPON_TECHNIQUE]: 1.15,
    [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.2,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.25,
  }),
);

export default data;
