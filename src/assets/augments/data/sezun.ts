import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentSezun = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
  is_variant: boolean = false,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.SEZUN,
    [GroupEnum.SEZUN],
    stats,
    is_variant,
  );
};

// --------------------------------------
// lunafiv
data.push(
  makeAugmentSezun("sezun lunafiv", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.15,
    [StatEnum.WEAPON_RANGED]: 1.15,
    [StatEnum.WEAPON_TECHNIQUE]: 1.15,
    [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.2,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.25,
  }),
);

data.push(
  makeAugmentSezun(
    "sezun lunafiv",
    0,
    { [StatEnum.CORE_BP]: 10 },
    true,
  ),
);

// --------------------------------------
// automfevre
data.push(
  makeAugmentSezun("sezun automfevre", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.05,
    [StatEnum.WEAPON_RANGED]: 1.05,
    [StatEnum.WEAPON_TECHNIQUE]: 1.05,
    [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.2,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.25,
  }),
);

data.push(
  makeAugmentSezun(
    "sezun automfevre",
    0,
    { [StatEnum.CORE_BP]: 10 },
    true,
  ),
);

export default data;
