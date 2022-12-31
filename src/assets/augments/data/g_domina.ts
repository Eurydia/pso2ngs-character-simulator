import { StatEnum } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

const data: Augment[] = [];

const makeAugmentDomina = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.DOMINA,
    [GroupEnumAugment.DOMINA],
    stats,
  );
};

// --------------------------------------
// ael
data.push(
  makeAugmentDomina("Ael Domina", 0, {
    [StatEnum.CORE_BP]: 8,
    [StatEnum.CORE_HP]: 5,
    [StatEnum.CORE_PP]: 3,
    [StatEnum.WEAPON_MELEE]: 1.015,
    [StatEnum.WEAPON_RANGED]: 1.015,
    [StatEnum.WEAPON_TECHNIQUE]: 1.015,
  }),
);

// --------------------------------------
// ret
data.push(
  makeAugmentDomina("Ret Domina", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.CORE_HP]: 15,
    [StatEnum.WEAPON_MELEE]: 1.015,
    [StatEnum.WEAPON_RANGED]: 1.015,
    [StatEnum.WEAPON_TECHNIQUE]: 1.015,
  }),
);

// --------------------------------------
// kvar
data.push(
  makeAugmentDomina("Kvar Domina", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.CORE_PP]: 5,
    [StatEnum.WEAPON_MELEE]: 1.015,
    [StatEnum.WEAPON_RANGED]: 1.015,
    [StatEnum.WEAPON_TECHNIQUE]: 1.015,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 0.98,
  }),
);

// --------------------------------------
// stira
data.push(
  makeAugmentDomina("Stira Domina", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.03,
    [StatEnum.WEAPON_RANGED]: 1.03,
    [StatEnum.WEAPON_TECHNIQUE]: 1.03,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 0.98,
  }),
);

export default data;
