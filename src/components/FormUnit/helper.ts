import {
  round as ld_round,
  toSafeInteger as ld_toSafeInteger,
} from "lodash";
import {
  Augment,
  Fixa,
  StatEnum,
  statObject,
  StatObject,
  Unit,
} from "../../assets";

const collectUnit = (item: Unit | null, target: StatObject): void => {
  if (item === null) {
    return;
  }

  const item_stats: StatObject = item.stats;

  for (const key of Object.keys(item_stats.stats)) {
    const value: number = item_stats.getStat(key as StatEnum);
    target.stackStat(key as StatEnum, value);
  }
};

const collectFixa = (
  item_fixa: Fixa | null,
  target: StatObject,
): void => {
  if (item_fixa === null) {
    return;
  }

  const item_stats: StatObject = item_fixa.stats;

  for (const key of Object.keys(item_stats.stats)) {
    const value: number = item_stats.getStat(key as StatEnum);
    target.stackStat(key as StatEnum, value);
  }
};

const collectEnhancement = (
  item_unit: Unit | null,
  item_enhancement: number,
  target: StatObject,
): void => {
  if (item_unit === null) {
    return;
  }

  const unit_defense_base: number = item_unit.base_def;
  const unit_defense_bonus: number =
    item_unit.getBonusDef(item_enhancement);
  target.stackStat(StatEnum.CORE_ATTACK, unit_defense_bonus);

  const bp_from_def: number = ld_round(
    (unit_defense_base + unit_defense_bonus) / 2,
  );

  const bp_from_hp: number = ld_round(
    item_unit.stats.getStat(StatEnum.CORE_HP) / 10,
  );

  const bp_from_pp: number = ld_round(
    item_unit.stats.getStat(StatEnum.CORE_PP),
  );

  target.stackStat(
    StatEnum.CORE_BP,
    bp_from_def + bp_from_hp + bp_from_pp,
  );
};

const collectAugments = (
  item_augments: (Augment | null)[],
  target: StatObject,
): void => {
  for (const item_augment of item_augments) {
    if (item_augment === null) {
      continue;
    }

    const item_stats: StatObject = item_augment.stats;

    for (const key of Object.keys(item_stats.stats)) {
      const value: number = item_stats.getStat(key as StatEnum);
      target.stackStat(key as StatEnum, value);
    }
  }
};

export const collectStats = (
  item_unit: Unit | null,
  item_enhancement: number,
  item_fixa: Fixa | null,
  item_augments: (Augment | null)[],
): StatObject => {
  const target: StatObject = statObject({});
  collectUnit(item_unit, target);
  collectFixa(item_fixa, target);
  collectEnhancement(item_unit, item_enhancement, target);
  collectAugments(item_augments, target);
  return target;
};
