import {
  ActionContext,
  Augment,
  Fixa,
  getUnitStatObject,
  mergeStat,
  StatEnum,
  statObject,
  StatObject,
  Unit,
} from "../../assets";

export const createStatSummaryUnit = (
  ctx: ActionContext,
  unit: Unit | null,
  unit_level: number,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): StatObject => {
  let result: StatObject = statObject();

  if (unit === null) {
    return result;
  }

  const stat_unit: StatObject = getUnitStatObject(
    ctx,
    unit,
    unit_level,
  );

  result = mergeStat(result, stat_unit);

  if (fixa !== null) {
    const stat_fixa: StatObject = fixa.getStatObject(ctx);
    result = mergeStat(result, stat_fixa);
  }

  for (const augment of augments) {
    if (augment === null) {
      continue;
    }
    const stat_augment: StatObject = augment.getStatObject(ctx);
    result = mergeStat(result, stat_augment);
  }

  return result;
};
