import { ActionContext } from "../context";
import { StatEnum, StatObject } from "../stat";

import { GroupEnumUnitRarity } from "./groupEnum";
import { calcBonusDef } from "./helper";

export type Unit = {
  label: string;
  rarity: GroupEnumUnitRarity;
  getStatObject: (
    ctx: ActionContext,
    unit_level: number,
  ) => StatObject;
};

export const unit = (
  label: string,
  rarity: GroupEnumUnitRarity,
  growth_data: [number, number][],
  getterFunction: (ctx: ActionContext) => StatObject,
): Unit => {
  const getStatObject = (ctx: ActionContext, unit_level: number) => {
    const stat: StatObject = getterFunction(ctx);

    const defense_base: number = stat.getStat(StatEnum.CORE_DEFENSE);
    const defense_bonus: number = calcBonusDef(
      unit_level,
      growth_data,
    );

    console.log("A", stat.getStat(StatEnum.CORE_DEFENSE));
    stat.stackStat(StatEnum.CORE_DEFENSE, defense_bonus);
    console.log("B", stat.getStat(StatEnum.CORE_DEFENSE));

    const bp_from_defense: number =
      (defense_base + defense_bonus) / 2;
    const bp_from_hp: number = stat.getStat(StatEnum.CORE_HP) / 10;
    const bp_from_pp: number = stat.getStat(StatEnum.CORE_PP);
    stat.stackStat(
      StatEnum.CORE_BP,
      Math.round(bp_from_defense + bp_from_hp + bp_from_pp),
    );

    return stat;
  };

  const result: Unit = Object.freeze({
    label,
    rarity,
    getStatObject,
  });

  return result;
};
