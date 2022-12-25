import {
  Augment,
  Fixa,
  StatEnum,
  statObject,
  StatObject,
  Unit,
} from "../../assets";
import { SummaryEquipment } from "../../types";

const collectUnit = (unit: Unit | null, target: StatObject): void => {
  if (unit === null) {
    return;
  }

  const unit_stats: StatObject = unit.stats;
  const keys: StatEnum[] = unit_stats.keys;

  for (const key of keys) {
    const value: number = unit_stats.getStat(key);
    target.stackStat(key, value);
  }
};

const collectFixa = (fixa: Fixa | null, target: StatObject): void => {
  if (fixa === null) {
    return;
  }

  const fixa_stats: StatObject = fixa.stats;
  const keys: StatEnum[] = fixa_stats.keys;

  for (const key of keys) {
    const value: number = fixa_stats.getStat(key);
    target.stackStat(key, value);
  }
};

const collectEnhancement = (
  unit: Unit | null,
  level: number,
  target: StatObject,
): void => {
  if (unit === null) {
    return;
  }

  const unit_stats: StatObject = unit.stats;

  const def_base: number = unit.base_def;
  const def_bonus: number = unit.getBonusDef(level);
  target.stackStat(StatEnum.CORE_DEFENSE, def_bonus);

  const bp_from_def: number = Math.round((def_base + def_bonus) / 2);
  const bp_from_hp: number = Math.round(
    unit_stats.getStat(StatEnum.CORE_HP) / 10,
  );
  const bp_from_pp: number = Math.round(
    unit_stats.getStat(StatEnum.CORE_PP),
  );
  target.stackStat(
    StatEnum.CORE_BP,
    bp_from_def + bp_from_hp + bp_from_pp,
  );
};

const collectAugments = (
  augments: (Augment | null)[],
  target: StatObject,
): void => {
  for (const augment of augments) {
    if (augment === null) {
      continue;
    }

    const augment_stats: StatObject = augment.stats;
    const keys: StatEnum[] = augment_stats.keys;

    for (const key of keys) {
      const value: number = augment_stats.getStat(key);
      target.stackStat(key, value);
    }
  }
};

export const collectStat = (
  unit: Unit | null,
  level: number,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): StatObject => {
  const target: StatObject = statObject();
  collectUnit(unit, target);
  collectFixa(fixa, target);
  collectEnhancement(unit, level, target);
  collectAugments(augments, target);
  return target;
};

export const collectSummary = (
  unit: Unit | null,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): SummaryEquipment => {
  const summary: SummaryEquipment = {
    equipment: null,
    fixa: null,
    augments: [],
  };

  if (unit !== null) {
    summary.equipment = unit.label;
  }

  if (fixa !== null) {
    summary.fixa = fixa.label;
  }

  const summary_augment: string[] = [];

  for (const augment of augments) {
    if (augment === null) {
      continue;
    }

    summary_augment.push(augment.label);
  }

  summary.augments = summary_augment;

  return summary;
};
