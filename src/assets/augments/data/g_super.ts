import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_SUPER: Augment[] = [];

const makeAugmentSuper = (
  name: string,
  level: number,
  getAwareStatObject: (_: ActionContext) => StatObject,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.SUPER,
    [GroupEnumAugment.SUPER],
    getAwareStatObject,
  );
};

// --------------------------------------
// might | precision | technique
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
        [StatEnum.CORE_BP]: 8,
        [stat_weapon_up]: 1.0225,
      });
    };
    const super_augment: Augment = makeAugmentSuper(name, 1, _getter);
    G_SUPER.push(super_augment);
  }
})();

// --------------------------------------
// sta | spi
(() => {
  const DATA_ENTRY: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];
  const WEAPON_UP: number = 1.02;
  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    G_SUPER.push(
      makeAugmentSuper(
        `Super Sta${name}`,
        1,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 8,
            [StatEnum.CORE_HP]: 15,
            [stat_weapon_up]: WEAPON_UP,
          });
        },
      ),
    );

    G_SUPER.push(
      makeAugmentSuper(
        `Super Spi${name}`,
        1,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 8,
            [StatEnum.CORE_PP]: 5,
            [stat_weapon_up]: WEAPON_UP,
          });
        },
      ),
    );
  }
})();
