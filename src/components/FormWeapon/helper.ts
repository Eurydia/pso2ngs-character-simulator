import {
  Augment,
  Fixa,
  getStat,
  mergeStat,
  StatEnum,
  statObject,
  StatObject,
  Weapon,
} from "../../assets";
import { ActionContext } from "../../assets";
import { SummaryEquipment } from "../../types";

export const createStat = (
  ctx: ActionContext,
  weapon: Weapon | null,
  weapon_level: number,
  potential_level: number,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): StatObject => {
  let result: StatObject = statObject();

  if (weapon === null) {
    return result;
  }

  if (fixa !== null) {
    const stat_fixa: StatObject = fixa.getStatObject(ctx);
    result = mergeStat(result, stat_fixa);
  }

  for (const augment of augments) {
    if (augment === null) {
      continue;
    }
    const stat_augment: StatObject = augment.getterFunction(ctx);
    result = mergeStat(result, stat_augment);
  }

  const damage_adjustment: number = getStat(
    result,
    StatEnum.ADV_OFF_FLOOR,
  );

  const stat_weapon: StatObject = weapon.getterFunction(
    ctx,
    weapon_level,
    damage_adjustment,
    potential_level,
  );
  result = mergeStat(result, stat_weapon);

  return result;
};

export const createSummary = (
  weapon: Weapon | null,
  fixa: Fixa | null,
  augments: (Augment | null)[],
): SummaryEquipment => {
  const summary: SummaryEquipment = {
    equipment: null,
    fixa: null,
    augments: [],
  };

  if (weapon === null) {
    return summary;
  }

  summary.equipment = weapon.label;

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
