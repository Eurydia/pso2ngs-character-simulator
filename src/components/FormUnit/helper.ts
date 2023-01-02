import {
  ActionContext,
  Augment,
  Fixa,
  StatEnum,
  statObject,
  StatObject,
  Unit,
} from "../../assets";
import { SummaryEquipment } from "../../types";

const collectUnit = (
  context: ActionContext,
  unit: Unit,
  target: StatObject,
): void => {
  const stat_unit: StatObject = unit.getStatObject(context);
  target.merge(stat_unit);
};

const collectEnhancement = (
  context: ActionContext,
  unit: Unit,
  level: number,
  target: StatObject,
): void => {
  const stat_unit: StatObject = unit.getStatObject(context);

  const def_bonus: number = unit.getBonusDef(level);
  target.stackStat(StatEnum.CORE_DEFENSE, def_bonus);

  const bp_from_def: number = Math.round(
    (unit.base_def + def_bonus) / 2,
  );
  const bp_from_hp: number = Math.round(
    stat_unit.getStat(StatEnum.CORE_HP) / 10,
  );
  const bp_from_pp: number = Math.round(
    stat_unit.getStat(StatEnum.CORE_PP),
  );

  target.stackStat(
    StatEnum.CORE_BP,
    bp_from_def + bp_from_hp + bp_from_pp,
  );
};

const collectFixa = (
  context: ActionContext,
  fixa: Fixa | null,
  target: StatObject,
): void => {
  if (fixa === null) {
    return;
  }

  const stat_fixa: StatObject = fixa.getStatObject(context);
  target.merge(stat_fixa);
};

const collectAugments = (
  context: ActionContext,
  augments: (Augment | null)[],
  target: StatObject,
): void => {
  for (const augment of augments) {
    if (augment === null) {
      continue;
    }

    const stat_augment: StatObject = augment.getStatObject(context);
    target.merge(stat_augment);
  }
};

export const createStat = (
  context: ActionContext,
  unit: Unit | null,
  level: number,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): StatObject => {
  const result: StatObject = statObject();
  if (unit === null) {
    return result;
  }

  collectUnit(context, unit, result);
  collectEnhancement(context, unit, level, result);
  collectFixa(context, fixa, result);
  collectAugments(context, augments, result);

  return result;
};

export const createSummary = (
  unit: Unit | null,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): SummaryEquipment => {
  const summary: SummaryEquipment = {
    equipment: null,
    fixa: null,
    augments: [],
  };

  if (unit === null) {
    return summary;
  }

  summary.equipment = unit.label;

  if (fixa !== null) {
    summary.fixa = fixa.label;
  }

  for (const augment of augments) {
    if (augment === null) {
      continue;
    }
    summary.augments.push(augment.label);
  }

  return summary;
};
