import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentDread = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.DREAD,
    [GroupEnum.DREAD],
    stats,
  );
};

// --------------------------------------
// dread keeper
(() => {
  const data_bp = [7, 7.5, 10, 11];
  const data_hp = [10, 15, 30, 50];
  const data_pp = [3, 4, 7, 10];
  const data_floor = [1.01, 1.015, 1.02, 1.06];
  const data_damage_res = [1.01, 1.015, 1.02, 1.03];

  for (
    let level_index = 0;
    level_index < data_bp.length;
    level_index++
  ) {
    data.push(
      makeAugmentDread("Dread Keeper", level_index + 1, {
        [StatEnum.CORE_BP]: data_bp[level_index],
        [StatEnum.CORE_HP]: data_hp[level_index],
        [StatEnum.CORE_PP]: data_pp[level_index],
        [StatEnum.ADV_OFF_FLOOR]: data_floor[level_index],
        [StatEnum.ADV_DEF_DAMAGE_RES]: data_damage_res[level_index],
      }),
    );
  }
})();

export default data;
