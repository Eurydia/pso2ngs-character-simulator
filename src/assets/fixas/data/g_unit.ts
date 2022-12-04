import { StatEnum } from "../../stat";
import fixa, { Fixa } from "../fixas";
import GroupEnum from "../groupEnum";

const data: Fixa[] = [];

const makeFixaUnit = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
) => {
  return fixa(name, level, GroupEnum.UNIT, stats);
};

// --------------------------------------
// guard
(() => {
  const data_value = [1.01, 1.02, 1.03, 1.035, 1.04];

  for (
    let level_index = 0;
    level_index < data_value.length;
    level_index++
  ) {
    data.push(
      makeFixaUnit("Fixa Guard", level_index + 1, {
        [StatEnum.ADV_DEF_DAMAGE_RES]: data_value[level_index],
      }),
    );
  }
})();

// --------------------------------------
// performa
(() => {
  const data_value = [1.01, 1.02, 1.03, 1.035, 1.04];

  for (
    let level_index = 0;
    level_index < data_value.length;
    level_index++
  ) {
    data.push(
      makeFixaUnit("Fixa Performa", level_index + 1, {
        [StatEnum.ADV_PP_USAGE]: data_value[level_index],
      }),
    );
  }
})();

// ---------------------
// natura
(() => {
  const data_value = [1.02, 1.03, 1.04, 1.045, 1.05];

  for (
    let level_index = 0;
    level_index < data_value.length;
    level_index++
  ) {
    data.push(
      makeFixaUnit("Fixa Natura", level_index + 1, {
        [StatEnum.ADV_PP_NATURAL_RECOVERY]: data_value[level_index],
      }),
    );
  }
})();

// ---------------------
// enthusia
(() => {
  const data_value = [1.02, 1.03, 1.04, 1.045, 1.05];

  for (
    let level_index = 0;
    level_index < data_value.length;
    level_index++
  ) {
    data.push(
      makeFixaUnit("Fixa Natura", level_index + 1, {
        [StatEnum.ADV_PP_ACTIVE_RECOVERY]: data_value[level_index],
      }),
    );
  }
})();

export default data;
