import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_DECOLD: Augment[] = [];

const makeAugmentDecold = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.DECOLD,
    [GroupEnumAugment.DECOLD],
    getAwareStatObject,
    searchable_terms,
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
    const decold_augment: Augment = makeAugmentDecold(
      "Decold Standard",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.HARSH_COLD]: harsh_cold,
        });
      },
      [StatEnum.HARSH_COLD],
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
    const decold_augment: Augment = makeAugmentDecold(
      `Decold ${name}`,
      0,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: 9,
          [stat_weapon_up]: 1.025,
          [StatEnum.HARSH_COLD]: 0.25,
        });
      },
      [stat_weapon_up, StatEnum.HARSH_COLD],
    );
    G_DECOLD.push(decold_augment);
  }
})();
