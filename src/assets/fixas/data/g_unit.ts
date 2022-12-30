import { StatEnum } from "../../stat";
import fixa, { Fixa } from "../fixas";
import GroupEnum from "../groupEnum";

const data: Fixa[] = [];

const makeFixaUnit = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
) => {
  return fixa(name, level, GroupEnum.UNIT, stat);
};

// --------------------------------------
(() => {
  const data_value = [1.01, 1.02, 1.03, 1.035, 1.04];

  data_value.forEach((value, level_index) => {
    data.push(
      makeFixaUnit("Fixa Guard", level_index + 1, {
        [StatEnum.ADV_DEF_DAMAGE_RES]: value,
      }),
    );
  });
})();

(() => {
  const data_value = [0.99, 0.98, 0.97, 0.965, 0.96];

  data_value.forEach((value, level_index) => {
    data.push(
      makeFixaUnit("Fixa Performa", level_index + 1, {
        [StatEnum.ADV_PP_USAGE]: value,
      }),
    );
  });
})();

(() => {
  const data_value = [1.02, 1.03, 1.04, 1.045, 1.05];

  data_value.forEach((value, level_index) => {
    data.push(
      makeFixaUnit("Fixa Natura", level_index + 1, {
        [StatEnum.ADV_PP_NATURAL_RECOVERY]: value,
      }),
    );
  });
})();

(() => {
  const data_value = [1.02, 1.03, 1.04, 1.045, 1.05];

  data_value.forEach((value, level_index) => {
    data.push(
      makeFixaUnit("Fixa Enthusia", level_index + 1, {
        [StatEnum.ADV_PP_ACTIVE_RECOVERY]: value,
      }),
    );
  });
})();

export default data;
