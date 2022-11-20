import { StatObject } from "../../../types";
import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentSezun = (
  name: string,
  level: number,
  stats: StatObject,
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
// lunafiv
data.push(
  makeAugmentSezun("Sezun Lunafiv", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.15,
    [StatEnum.WEAPON_RANGED]: 1.15,
    [StatEnum.WEAPON_TECHNIQUE]: 1.15,
    [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.2,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.25,
  }),
);

// --------------------------------------
// automfevre
data.push(
  makeAugmentSezun("Sezun Automfevre", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.05,
    [StatEnum.WEAPON_RANGED]: 1.05,
    [StatEnum.WEAPON_TECHNIQUE]: 1.05,
    [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.2,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.25,
  }),
);

data.push(
  makeAugmentSezun("* Inactive Sezun", 0, {
    [StatEnum.CORE_BP]: 10,
  }),
);

export default data;
