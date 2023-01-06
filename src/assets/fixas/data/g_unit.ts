import { StatEnum, statObject } from "../../stat";
import { fixa, Fixa } from "../fixa";
import { GroupEnumFixa } from "../groupEnum";

export const G_UNIT: Fixa[] = [];

const makeFixaUnit = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
) => {
  return fixa(name, level, GroupEnumFixa.UNIT, (_) => {
    return statObject(stat);
  });
};

// --------------------------------------
(() => {
  const DATA_DAMAGE_RES: number[] = [1.01, 1.02, 1.03, 1.035, 1.04];

  DATA_DAMAGE_RES.forEach((damage_res, level_index) => {
    const level: number = level_index + 1;
    const unit_fixa: Fixa = makeFixaUnit("Fixa Guard", level, {
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
    });
    G_UNIT.push(unit_fixa);
  });
})();

(() => {
  const DATA_PP_USAGE: number[] = [0.99, 0.98, 0.97, 0.965, 0.96];

  DATA_PP_USAGE.forEach((pp_usage, level_index) => {
    const level: number = level_index + 1;
    const unit_fixa: Fixa = makeFixaUnit("Fixa Performa", level, {
      [StatEnum.ADV_PP_USAGE]: pp_usage,
    });
    G_UNIT.push(unit_fixa);
  });
})();

(() => {
  const DATA_PP_RECOVERY: number[] = [1.02, 1.03, 1.04, 1.045, 1.05];

  DATA_PP_RECOVERY.forEach((pp_recovery, level_index) => {
    const level: number = level_index + 1;
    const unit_fixa: Fixa = makeFixaUnit("Fixa Natura", level, {
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: pp_recovery,
    });
    G_UNIT.push(unit_fixa);
  });
})();

(() => {
  const DATA_PP_RECOVERY: number[] = [1.02, 1.03, 1.04, 1.045, 1.05];

  DATA_PP_RECOVERY.forEach((pp_recovery, level_index) => {
    const level: number = level_index + 1;
    const fixa_unit: Fixa = makeFixaUnit("Fixa Enthusia", level, {
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: pp_recovery,
    });
    G_UNIT.push(fixa_unit);
  });
})();
