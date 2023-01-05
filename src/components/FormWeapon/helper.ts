import {
  Augment,
  Fixa,
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
  const stat: StatObject = statObject();

  if (weapon === null) {
    return stat;
  }

  if (fixa !== null) {
    const stat_fixa: StatObject = fixa.getStatObject(ctx);
    stat.mergeStat(stat_fixa);
  }

  augments.forEach((augment) => {
    if (augment === null) {
      return;
    }
    const stat_augment: StatObject = augment.getStatObject(ctx);
    stat.mergeStat(stat_augment);
  });

  const damage_adjustment: number = stat.getStat(
    StatEnum.ADV_OFF_FLOOR,
  );

  const stat_weapon: StatObject = weapon.getStatObject(
    ctx,
    weapon_level,
    damage_adjustment,
    potential_level,
  );
  stat.mergeStat(stat_weapon);

  return stat;
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
