import {
  ActionContext,
  Augment,
  Fixa,
  StatEnum,
  statObject,
  StatObject,
  Unit,
} from "../../assets";

export const createStatSummaryUnit = (
  context: ActionContext,
  unit: Unit | null,
  unit_level: number,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): StatObject => {
  let stat: StatObject = statObject();

  if (unit === null) {
    return stat;
  }

  const stat_unit: StatObject = unit.getStatObject(
    context,
    unit_level,
  );

  stat = stat.mergeStat(stat_unit);

  if (fixa !== null) {
    const stat_fixa: StatObject = fixa.getStatObject(context);
    stat = stat.mergeStat(stat_fixa);
  }

  augments.forEach((augment) => {
    if (augment === null) {
      return;
    }
    const stat_augment: StatObject = augment.getStatObject(context);
    stat = stat.mergeStat(stat_augment);
  });

  return stat;
};
