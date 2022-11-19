import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

let data: Augment[] = [];

const makeGigas = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.GIGAS,
    [GroupEnum.GIGAS],
    stats,
  );
};

// --------------------------------------
// might | precision | technique
(() => {
  const data_bp = [6, 8, 10, 11];
  const data_hp = [5, 10, 15, 20];
  const data_weapon_up = [1.015, 1.02, 1.025, 1.03];

  const data_arr: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, weapon_up] = _data;

    for (
      let level_index = 0;
      level_index < data_bp.length;
      level_index++
    ) {
      const weapon_up_value = data_weapon_up[level_index];
      data.push(
        makeGigas(`gigas ${name}`, level_index + 1, {
          [StatEnum.CORE_BP]: data_bp[level_index],
          [StatEnum.CORE_HP]: data_hp[level_index],
          [weapon_up]: weapon_up_value,
        }),
      );
    }
  }
})();

// --------------------------------------
// aglai
data.push(
  makeGigas("gigas aglai", 0, {
    [StatEnum.CORE_BP]: 11,
    [StatEnum.CORE_HP]: 15,
    [StatEnum.WEAPON_MELEE]: 1.025,
    [StatEnum.WEAPON_RANGED]: 1.025,
  }),
);

// --------------------------------------
// euphroy
data.push(
  makeGigas("gigas euphroy", 0, {
    [StatEnum.CORE_BP]: 11,
    [StatEnum.CORE_HP]: 15,
    [StatEnum.WEAPON_MELEE]: 1.025,
    [StatEnum.WEAPON_TECHNIQUE]: 1.025,
  }),
);

// --------------------------------------
// thali
data.push(
  makeGigas("gigas thali", 0, {
    [StatEnum.CORE_BP]: 11,
    [StatEnum.CORE_HP]: 15,
    [StatEnum.WEAPON_RANGED]: 1.025,
    [StatEnum.WEAPON_TECHNIQUE]: 1.025,
  }),
);
export default data;
