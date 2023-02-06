import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_GIGAS: Augment[] = [];

const makeAugmentGigas = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.GIGAS,
    [GroupEnumAugment.GIGAS],
    getAwareStatObject,
  );
};

// --------------------------------------
// might | precision | technique
(() => {
  const DATA_BP: number[] = [6, 8, 10, 11];
  const DATA_HP: number[] = [5, 10, 15, 20];
  const DATA_WEAPON_UP: number[] = [1.015, 1.02, 1.025, 1.03];
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];
  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const hp: number = DATA_HP[level_index];
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const _getter = (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: hp,
          [stat_weapon_up]: weapon_up,
        });
      };
      const gigas_augment: Augment = makeAugmentGigas(
        `Gigas ${name}`,
        level,
        _getter,
      );
      G_GIGAS.push(gigas_augment);
    });
  }
})();

// --------------------------------------
// aglai | euphroy | thali
(() => {
  const DATA_ENTRY: [string, [StatEnum, StatEnum]][] = [
    ["Aglai", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Euphory", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["Thali", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];
  const WEAPON_UP: number = 1.025;
  for (const entry of DATA_ENTRY) {
    const [name, [stat_weapon_up_a, stat_weapon_up_b]] = entry;
    const _getter = (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_HP]: 15,
        [stat_weapon_up_a]: WEAPON_UP,
        [stat_weapon_up_b]: WEAPON_UP,
      });
    };
    const gigas_augment: Augment = makeAugmentGigas(
      `Gigas ${name}`,
      0,
      _getter,
    );
    G_GIGAS.push(gigas_augment);
  }
})();
