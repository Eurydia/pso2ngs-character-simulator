import { StatEnum } from "../../stat";
import fixa, { Fixa } from "../fixas";
import GroupEnum from "../groupEnum";

const data: Fixa[] = [];

const makeFixaWeapon = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
) => {
  return fixa(name, level, GroupEnum.WEAPON, stats);
};

// --------------------------------------
// attack
(() => {
  const data_value = [1.02, 1.03, 1.04, 1.045, 1.05];

  for (
    let level_index = 0;
    level_index < data_value.length;
    level_index++
  ) {
    data.push(
      makeFixaWeapon("Fixa Attack", level_index + 1, {
        [StatEnum.ADV_OFF_DAMAGE]: data_value[level_index],
      }),
    );
  }
})();

// --------------------------------------
// fatale
(() => {
  const data_value = [0.05, 0.08, 0.1, 0.12, 0.13];

  for (
    let level_index = 0;
    level_index < data_value.length;
    level_index++
  ) {
    data.push(
      makeFixaWeapon("Fixa Fatale", level_index + 1, {
        [StatEnum.ADV_OFF_CRIT_CHANCE]: data_value[level_index],
      }),
    );
  }
})();

// ---------------------
// termina
(() => {
  const data_value = [1.05, 1.09, 1.12, 1.14, 1.15];

  for (
    let level_index = 0;
    level_index < data_value.length;
    level_index++
  ) {
    data.push(
      makeFixaWeapon("Fixa Termina", level_index + 1, {
        [StatEnum.ADV_OFF_CRIT_DAMAGE]: data_value[level_index],
      }),
    );
  }
})();

export default data;
