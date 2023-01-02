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

const collectWeapon = (
  context: ActionContext,
  weapon: Weapon,
  potential_string: string,
  target: StatObject,
): void => {
  const stat_weapon = weapon.getStatObject(context);
  target.merge(stat_weapon);

  const potential = weapon.potential.getPotential(potential_string);

  if (potential === null) {
    return;
  }

  const stat_potential = potential.getStatObject(context);
  target.merge(stat_potential);
};

const collectEnhancement = (
  context: ActionContext,
  weapon: Weapon,
  level: number,
  target: StatObject,
): void => {
  const atk_bonus: number = weapon.getBonusAttack(level);
  target.stackStat(StatEnum.CORE_ATTACK, atk_bonus);

  const weapon_stats = weapon.getStatObject(context);

  const floor_potency = weapon_stats.getStat(StatEnum.ADV_OFF_FLOOR);

  const bp_from_atk =
    (floor_potency / 2) * (weapon.base_attack + atk_bonus);
  target.stackStat(StatEnum.CORE_BP, Math.round(bp_from_atk));
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

export const collectStat = (
  context: ActionContext,
  weapon: Weapon | null,
  level: number,
  fixa: Fixa | null,
  potential_string: string,
  augments: (Augment | null)[],
): StatObject => {
  const result: StatObject = statObject({});

  if (weapon === null) {
    return result;
  }

  collectWeapon(context, weapon, potential_string, result);
  collectEnhancement(context, weapon, level, result);
  collectFixa(context, fixa, result);
  collectAugments(context, augments, result);

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
