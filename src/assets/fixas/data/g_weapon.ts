import { StatEnum, statObject } from "../../stat";
import { fixa, Fixa } from "../fixas";
import { GroupEnumFixa } from "../groupEnum";

export const g_weapon: Fixa[] = [];

const makeFixaWeapon = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
) => {
  return fixa(name, level, GroupEnumFixa.WEAPON, (_) =>
    statObject(stat),
  );
};

// --------------------------------------
(() => {
  const data_value = [1.02, 1.03, 1.04, 1.045, 1.05];

  data_value.forEach((value, level_index) => {
    g_weapon.push(
      makeFixaWeapon("Fixa Attack", level_index + 1, {
        [StatEnum.ADV_OFF_DAMAGE_UP]: value,
      }),
    );
  });
})();

(() => {
  const data_value = [0.05, 0.08, 0.1, 0.12, 0.13];

  data_value.forEach((value, level_index) => {
    g_weapon.push(
      makeFixaWeapon("Fixa Fatale", level_index + 1, {
        [StatEnum.ADV_OFF_CRIT_CHANCE]: value,
      }),
    );
  });
})();

(() => {
  const data_value = [1.05, 1.09, 1.12, 1.14, 1.15];

  data_value.forEach((value, level_index) => {
    g_weapon.push(
      makeFixaWeapon("Fixa Termina", level_index + 1, {
        [StatEnum.ADV_OFF_CRIT_DAMAGE]: value,
      }),
    );
  });
})();
