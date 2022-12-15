import {
  round as ld_round,
  toSafeInteger as ld_toSafeInteger,
} from "lodash";
import {
  Augment,
  Fixa,
  StatEnum,
  statObject,
  StatObject,
  Weapon,
} from "../../assets";

const collectWeapon = (
  item: Weapon | null,
  target: StatObject,
): void => {
  if (item === null) {
    return;
  }

  const item_stats: StatObject = item.stats;

  for (const key of Object.keys(item_stats.stats)) {
    const value: number = item_stats.getStat(key as StatEnum);
    target.stackStat(key as StatEnum, value);
  }
};

const collectFixa = (
  item_fixa: Fixa | null,
  target: StatObject,
): void => {
  if (item_fixa === null) {
    return;
  }

  const item_stats: StatObject = item_fixa.stats;

  for (const key of Object.keys(item_stats.stats)) {
    const value: number = item_stats.getStat(key as StatEnum);
    target.stackStat(key as StatEnum, value);
  }
};

const collectPotential = (
  item_weapon: Weapon | null,
  item_potential: string,
  target: StatObject,
): void => {
  if (item_weapon === null) {
    return;
  }

  if (item_potential === "") {
    return;
  }

  const potential_dict = item_weapon.potential.toDict();
  const potential_current = potential_dict[item_potential];

  if (potential_current === undefined) {
    return;
  }

  const { level, stats } = potential_current;

  target.stackStat(StatEnum.CORE_BP, level * 10);

  const potential_stats = stats.stats;

  for (const key of Object.keys(potential_stats)) {
    const value: number = stats.getStat(key as StatEnum);
    target.stackStat(key as StatEnum, value);
    console.log(key, value);
  }
};

const collectEnhancement = (
  item_weapon: Weapon | null,
  item_enhancement: number,
  target: StatObject,
): void => {
  if (item_weapon === null) {
    return;
  }

  const weapon_attack_bonus: number =
    item_weapon.getBonusAttack(item_enhancement);
  target.stackStat(StatEnum.CORE_ATTACK, weapon_attack_bonus);

  const floor_potency = item_weapon.stats.getStat(
    StatEnum.ADV_OFF_FLOOR,
  );

  const weapon_attack_base: number = item_weapon.base_attack;

  const bp_from_atk =
    (floor_potency / 2) * (weapon_attack_base + weapon_attack_bonus);

  target.stackStat(StatEnum.CORE_BP, ld_round(bp_from_atk));
};

const collectAugments = (
  item_augments: (Augment | null)[],
  target: StatObject,
): void => {
  for (const item_augment of item_augments) {
    if (item_augment === null) {
      continue;
    }

    const item_stats: StatObject = item_augment.stats;

    for (const key of Object.keys(item_stats.stats)) {
      const value: number = item_stats.getStat(key as StatEnum);
      target.stackStat(key as StatEnum, value);
    }
  }
};

export const collectStats = (
  item_weapon: Weapon | null,
  item_enhancement: number,
  item_fixa: Fixa | null,
  item_potential: string,
  item_augments: (Augment | null)[],
): StatObject => {
  const target: StatObject = statObject({});
  collectWeapon(item_weapon, target);
  collectFixa(item_fixa, target);
  collectPotential(item_weapon, item_potential, target);
  collectEnhancement(item_weapon, item_enhancement, target);
  collectAugments(item_augments, target);
  return target;
};
