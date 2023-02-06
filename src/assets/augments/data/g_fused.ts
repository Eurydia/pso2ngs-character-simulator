import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_FUSED: Augment[] = [];

const makeAugmentFused = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.FUSED,
    [GroupEnumAugment.BASIC, GroupEnumAugment.FUSED],
    getAwareStatObject,
  );
};

// --------------------------------------
// fused
(() => {
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];
  const WEAPON_UP = 1.02;
  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;

    G_FUSED.push(
      makeAugmentFused(
        `Sta ${name}`,
        0,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 8,
            [StatEnum.CORE_HP]: 15,
            [stat_weapon_up]: WEAPON_UP,
          });
        },
      ),
    );

    G_FUSED.push(
      makeAugmentFused(
        `Spi ${name}`,
        0,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 8,
            [StatEnum.CORE_PP]: 5,
            [stat_weapon_up]: WEAPON_UP,
          });
        },
      ),
    );

    G_FUSED.push(
      makeAugmentFused(
        `Deft ${name}`,
        0,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 8,
            [stat_weapon_up]: WEAPON_UP,
            [StatEnum.ADV_OFF_FLOOR]: 1.02,
          });
        },
      ),
    );

    G_FUSED.push(
      makeAugmentFused(
        `Gua ${name}`,
        0,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 8,
            [stat_weapon_up]: WEAPON_UP,
            [StatEnum.ADV_DEF_DAMAGE_RES]: 1.02,
          });
        },
      ),
    );
  }
})();
