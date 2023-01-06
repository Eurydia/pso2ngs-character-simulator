import { ActionContext } from "../../context";
import { StatEnum, StatObject, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_DUALBLE: Augment[] = [];

const makeAugmentDualble = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.DUALBLE,
    [GroupEnumAugment.DUALBLE],
    getAwareStatObject,
  );
};

// --------------------------------------
// melra | meltech | ratech
(() => {
  const DATA_BP: number[] = [4, 5, 6, 7];
  const DATA_WEAPON_UP: number[] = [1.0075, 1.0125, 1.0175, 1.0275];
  const DATA_ENTRY: [string, [StatEnum, StatEnum]][] = [
    ["Melra", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Meltech", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["Ratech", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];
  for (const entry of DATA_ENTRY) {
    const [name, [stat_weapon_up_a, stat_weapon_up_b]] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const _getter = (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [stat_weapon_up_a]: weapon_up,
          [stat_weapon_up_b]: weapon_up,
        });
      };
      const dualble_augment: Augment = makeAugmentDualble(
        `${name} Dualble`,
        level,
        _getter,
      );
      G_DUALBLE.push(dualble_augment);
    });
  }
})();

// --------------------------------------
// triplble
G_DUALBLE.push(
  makeAugmentDualble(
    "Triplble",
    0,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 8,
        [StatEnum.WEAPON_MELEE]: 1.02,
        [StatEnum.WEAPON_RANGED]: 1.02,
        [StatEnum.WEAPON_TECHNIQUE]: 1.02,
      });
    },
  ),
);
