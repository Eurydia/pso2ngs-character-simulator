import { StatEnum, statObject } from "../../stat";
import { fixa, Fixa } from "../fixas";
import { GroupEnumFixa } from "../groupEnum";

export const G_WEAPON: Fixa[] = [];

const makeFixaWeapon = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
) => {
  return fixa(name, level, GroupEnumFixa.WEAPON, (_) => {
    return statObject(stat);
  });
};

// --------------------------------------
(() => {
  const DATA_DAMAGE_UP: number[] = [1.02, 1.03, 1.04, 1.045, 1.05];

  DATA_DAMAGE_UP.forEach((damage_up, level_index) => {
    const level: number = level_index + 1;
    const weapon_fixa: Fixa = makeFixaWeapon("Fixa Attack", level, {
      [StatEnum.ADV_OFF_DAMAGE_UP]: damage_up,
    });
    G_WEAPON.push(weapon_fixa);
  });
})();

(() => {
  const DATA_CRIT_CHANCE: number[] = [0.05, 0.08, 0.1, 0.12, 0.13];

  DATA_CRIT_CHANCE.forEach((crit_chance, level_index) => {
    const level: number = level_index + 1;
    const weapon_fixa: Fixa = makeFixaWeapon("Fixa Fatale", level, {
      [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
    });
    G_WEAPON.push(weapon_fixa);
  });
})();

(() => {
  const DATA_CRIT_DAMAGE: number[] = [1.05, 1.09, 1.12, 1.14, 1.15];

  DATA_CRIT_DAMAGE.forEach((crit_damage, level_index) => {
    const level: number = level_index + 1;
    const weapon_fixa: Fixa = makeFixaWeapon("Fixa Termina", level, {
      [StatEnum.ADV_OFF_CRIT_DAMAGE]: crit_damage,
    });
    G_WEAPON.push(weapon_fixa);
  });
})();
