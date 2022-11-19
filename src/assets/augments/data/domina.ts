import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

let data: Augment[] = [];

const makeDomina = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.DOMINA,
    [GroupEnum.DOMINA],
    stats,
  );
};

// --------------------------------------
// ael
data.push(
  makeDomina("ael domina", 0, {
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
  makeDomina("ret domina", 0, {
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
  makeDomina("kvar domina", 0, {
    [StatEnum.CORE_BP]: 10,
    [StatEnum.CORE_PP]: 5,
    [StatEnum.WEAPON_MELEE]: 1.015,
    [StatEnum.WEAPON_RANGED]: 1.015,
    [StatEnum.WEAPON_TECHNIQUE]: 1.015,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 0.98,
  }),
);

export default data;
