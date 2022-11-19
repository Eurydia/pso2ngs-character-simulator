import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

let data: Augment[] = [];

const makeDecold = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.DECOLD,
    [GroupEnum.DECOLD],
    stats,
  );
};

// --------------------------------------
// standard
(() => {
  const data_bp = [1, 3, 5];
  const data_cold_res = [0.05, 0.15, 0.25];

  for (
    let level_index = 0;
    level_index < data_bp.length;
    level_index++
  ) {
    data.push(
      makeDecold("decold standard", level_index + 1, {
        [StatEnum.CORE_BP]: data_bp[level_index],
        [StatEnum.HARSH_COLD]: data_cold_res[level_index],
      }),
    );
  }
})();

// --------------------------------------
// might | precicion | technique
(() => {
  const data_arr: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.025;

  for (const _data of data_arr) {
    const [name, weapon_up] = _data;

    data.push(
      makeDecold(`decold ${name}`, 0, {
        [StatEnum.CORE_BP]: 9,
        [weapon_up]: weapon_up_value,
        [StatEnum.HARSH_COLD]: 0.25,
      }),
    );
  }
})();

export default data;
