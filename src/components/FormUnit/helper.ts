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

export const createStat = (
  context: ActionContext,
  unit: Unit | null,
  unit_level: number,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): StatObject => {
  const result: StatObject = statObject();

  if (unit === null) {
    return result;
  }

  const stat_unit: StatObject = unit.getStatObject(
    context,
    unit_level,
  );
  result.merge(stat_unit);

  if (fixa !== null) {
    const stat_fixa: StatObject = fixa.getStatObject(context);
    result.merge(stat_fixa);
  }

  augments.forEach((augment) => {
    if (augment === null) {
      return;
    }
    const stat_augment: StatObject = augment.getStatObject(context);
    result.merge(stat_augment);
  });

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
