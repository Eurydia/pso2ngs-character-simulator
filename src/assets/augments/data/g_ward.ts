import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const g_ward: Augment[] = [];

const makeAugmentWard = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.WARD,
    [GroupEnumAugment.WARD],
    (_) => statObject(stat),
  );
};

// --------------------------------------
// ward
(() => {
  const data_bp = [4, 5, 6];
  const data_ail_res = [1.2, 1.25, 1.3];

  const data_stats: [string, StatEnum][] = [
    ["Burn", StatEnum.AIL_BURN],
    ["Freeze", StatEnum.AIL_FREEZE],
    ["Shock", StatEnum.AIL_SHOCK],
    ["Blind", StatEnum.AIL_BLIND],
    ["Panic", StatEnum.AIL_PANIC],
    ["Poison", StatEnum.AIL_POISON],
    ["Pain", StatEnum.AIL_PHYDOWN],
  ];

  for (const data_stat of data_stats) {
    const [name, res_up] = data_stat;

    for (
      let level_index = 0;
      level_index < data_bp.length;
      level_index++
    ) {
      const res_up_value = data_ail_res[level_index];

      g_ward.push(
        makeAugmentWard(`${name} Ward`, level_index + 1, {
          [StatEnum.CORE_BP]: data_bp[level_index],
          [res_up]: res_up_value,
        }),
      );
    }
  }
})();

// --------------------------------------
// sovereign ward
(() => {
  const data_bp = [6, 8, 10];
  const data_ail_res = [1.2, 1.25, 1.3];

  for (
    let level_index = 0;
    level_index < data_bp.length;
    level_index++
  ) {
    const res_up_value = data_ail_res[level_index];

    g_ward.push(
      makeAugmentWard("Sovereign Ward", level_index + 1, {
        [StatEnum.CORE_BP]: data_bp[level_index],
        [StatEnum.AIL_BURN]: res_up_value,
        [StatEnum.AIL_FREEZE]: res_up_value,
        [StatEnum.AIL_SHOCK]: res_up_value,
        [StatEnum.AIL_BLIND]: res_up_value,
        [StatEnum.AIL_PANIC]: res_up_value,
        [StatEnum.AIL_POISON]: res_up_value,
        [StatEnum.AIL_PHYDOWN]: res_up_value,
      }),
    );
  }
})();
