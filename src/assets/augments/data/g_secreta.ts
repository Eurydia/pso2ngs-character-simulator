import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_SECRETA: Augment[] = [];

const makeAugmentSecreta = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.SECRETA,
    [GroupEnumAugment.SECRETA],
    (_) => {
      return statObject(stat);
    },
  );
};

// --------------------------------------
// alt
(() => {
  const DATA_BP: number[] = [3, 4, 5, 6];
  const DATA_HP: number[] = [-10, -10, -10, -10];
  const DATA_WEAPON_UP: number[] = [1.01, 1.015, 1.02, 1.025];
  const DATA_FLOOR_UP: number[] = [1.01, 1.015, 1.02, 1.025];
  const DATA_DAMAGE_RES: number[] = [0.985, 0.985, 0.985, 0.985];

  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const hp: number = DATA_HP[level_index];
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const floor_up: number = DATA_FLOOR_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];

    const secreta_augment: Augment = makeAugmentSecreta(
      "Alts Secreta",
      level,
      {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.CORE_HP]: hp,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_FLOOR]: floor_up,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      },
    );

    G_SECRETA.push(secreta_augment);
  });
})();
