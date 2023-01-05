import {
  ActionContext,
  Augment,
  Fixa,
  statObject,
  StatObject,
  Unit,
} from "../../assets";
import { FormDataUnit } from "../../types";

export const createStatSummaryUnit = (
  context: ActionContext,
  unit: Unit | null,
  unit_level: number,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): StatObject => {
  const stat: StatObject = statObject();

  if (unit === null) {
    return stat;
  }

  const stat_unit: StatObject = unit.getStatObject(
    context,
    unit_level,
  );
  stat.merge(stat_unit);

  if (fixa !== null) {
    const stat_fixa: StatObject = fixa.getStatObject(context);
    stat.merge(stat_fixa);
  }

  augments.forEach((augment) => {
    if (augment === null) {
      return;
    }
    const stat_augment: StatObject = augment.getStatObject(context);
    stat.merge(stat_augment);
  });

  return stat;
};
