import { ActionContext } from "../../../contexts/ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";

import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_DECOLD: Augment[] = [];

const makeAugmentDecold = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.DECOLD,
    [GroupEnumAugment.DECOLD],
    getAwareStatObject,
  );
};

// --------------------------------------
// standard
(() => {
  const DATA_BP: number[] = [1, 3, 5];
  const DATA_HARSH_COLD: number[] = [0.05, 0.15, 0.25];
  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const harsh_cold: number = DATA_HARSH_COLD[level_index];
    const _getter = (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: bp,
        [StatEnum.HARSH_COLD]: harsh_cold,
      });
    };
    const decold_augment: Augment = makeAugmentDecold(
      "Decold Standard",
      level,
      _getter,
    );
    G_DECOLD.push(decold_augment);
  });
})();

// --------------------------------------
// might | precicion | technique
(() => {
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];
  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    const _getter = (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 9,
        [stat_weapon_up]: 1.025,
        [StatEnum.HARSH_COLD]: 0.25,
      });
    };
    const decold_augment: Augment = makeAugmentDecold(
      `Decold ${name}`,
      0,
      _getter,
    );
    G_DECOLD.push(decold_augment);
  }
})();
