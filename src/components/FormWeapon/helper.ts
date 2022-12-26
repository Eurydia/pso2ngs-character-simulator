import {
  Augment,
  Fixa,
  StatEnum,
  statObject,
  StatObject,
  Weapon,
  Potential,
} from "../../assets";
import { SummaryEquipment } from "../../types";

const collectWeapon = (
  weapon: Weapon | null,
  target: StatObject,
): void => {
  if (weapon === null) {
    return;
  }

  const weapon_stats: StatObject = weapon.stats;
  const keys: StatEnum[] = weapon_stats.keys;

  for (const key of keys) {
    const value: number = weapon_stats.getStat(key);
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

const collectPotential = (
  weapon: Weapon | null,
  potential_key: string,
  target: StatObject,
): void => {
  if (weapon === null) {
    return;
  }

  if (potential_key === "") {
    return;
  }

  const potential: Potential = weapon.potential;
  const potential_current = potential.getPotential(potential_key);

  if (potential_current === null) {
    return;
  }

  const { level, stats: potential_stats } = potential_current;
  const keys: StatEnum[] = potential_stats.keys;

  target.stackStat(StatEnum.CORE_BP, level * 10);

  for (const key of keys) {
    const value: number = potential_stats.getStat(key);
    target.stackStat(key, value);
  }
};

const collectEnhancement = (
  weapon: Weapon | null,
  level: number,
  target: StatObject,
): void => {
  if (weapon === null) {
    return;
  }

  const atk_bonus: number = weapon.getBonusAttack(level);
  target.stackStat(StatEnum.CORE_ATTACK, atk_bonus);

  const weapon_stats = weapon.stats;

  const atk_base: number = weapon.base_attack;
  const floor_potency = weapon_stats.getStat(StatEnum.ADV_OFF_FLOOR);

  const bp_from_atk = (floor_potency / 2) * (atk_base + atk_bonus);
  target.stackStat(StatEnum.CORE_BP, Math.round(bp_from_atk));
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
    const keys = augment_stats.keys;

    for (const key of keys) {
      const value: number = augment_stats.getStat(key);
      target.stackStat(key, value);
    }
  }
};

export const collectStat = (
  weapon: Weapon | null,
  level: number,
  fixa: Fixa | null,
  potential: string,
  augments: (Augment | null)[],
): StatObject => {
  const target: StatObject = statObject({});
  collectWeapon(weapon, target);
  collectFixa(fixa, target);
  collectPotential(weapon, potential, target);
  collectEnhancement(weapon, level, target);
  collectAugments(augments, target);
  return target;
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

  if (weapon !== null) {
    summary.equipment = weapon.label;
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
