import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const g_secreta: Augment[] = [];

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
    (_) => statObject(stat),
  );
};

// --------------------------------------
// alt
(() => {
  const data_bp = [3, 4, 5, 6];
  const data_hp = [-10, -10, -10, -10];
  const data_weapon_up = [1.01, 1.015, 1.02, 1.025];
  const data_floor = [1.01, 1.015, 1.02, 1.025];
  const data_damage_res = [0.985, 0.985, 0.985, 0.985];

  data_bp.forEach((bp, level_index) => {
    const weapon_up_value = data_weapon_up[level_index];

    g_secreta.push(
      makeAugmentSecreta("Alts Secreta", level_index + 1, {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.CORE_HP]: data_hp[level_index],
        [StatEnum.WEAPON_MELEE]: weapon_up_value,
        [StatEnum.WEAPON_RANGED]: weapon_up_value,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: data_floor[level_index],
        [StatEnum.ADV_DEF_DAMAGE_RES]: data_damage_res[level_index],
      }),
    );
  });
})();
