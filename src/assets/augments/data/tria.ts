import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentTria = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.TRIA,
    [GroupEnum.TRIA],
    stats,
  );
};

// --------------------------------------
(() => {
  const data_stats: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.0225;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    // sta
    data.push(
      makeAugmentTria(`Tria Staro${name}`, 0, {
        [StatEnum.CORE_BP]: 6,
        [StatEnum.CORE_HP]: -5,
        [weapon_up]: weapon_up_value,
      }),
    );

    // spi
    data.push(
      makeAugmentTria(`Tria Spiro${name}`, 0, {
        [StatEnum.CORE_BP]: 6,
        [StatEnum.CORE_PP]: -3,
        [weapon_up]: weapon_up_value,
      }),
    );

    // deft
    data.push(
      makeAugmentTria(`Tria Deftro${name}`, 0, {
        [StatEnum.CORE_BP]: 6,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 0.99,
      }),
    );

    // gua
    data.push(
      makeAugmentTria(`Tria Guaro${name}`, 0, {
        [StatEnum.CORE_BP]: 6,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 0.99,
      }),
    );
  }
})();

export default data;
