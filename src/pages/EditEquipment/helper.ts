import {
  ActionContext,
  Augment,
  Fixa,
  Unit,
  statObject,
  StatObject,
  Weapon,
  StatEnum,
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

  const stat_unit: StatObject = Unit.getStatObject(
    ctx,
    unit,
    unit_level,
  );
  result = StatObject.merge(result, stat_unit);

  if (fixa !== null) {
    const stat_fixa: StatObject = fixa.getAwareStatObject(ctx);
    result = StatObject.merge(result, stat_fixa);
  }

  for (const augment of augments) {
    if (augment === null) {
      continue;
    }
    const stat_augment: StatObject = augment.getAwareStatObject(ctx);
    result = StatObject.merge(result, stat_augment);
  }

  return result;
};

export const createStatSummaryWeapon = (
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
    const stat_fixa: StatObject = fixa.getAwareStatObject(ctx);
    result = StatObject.merge(result, stat_fixa);
  }
  for (const augment of augments) {
    if (augment === null) {
      continue;
    }
    const stat_augment: StatObject = augment.getAwareStatObject(ctx);
    result = StatObject.merge(result, stat_augment);
  }

  const damage_adjustment: number = StatObject.getStat(
    result,
    StatEnum.ADV_OFF_FLOOR,
  );
  const stat_weapon: StatObject = Weapon.getStatObject(
    ctx,
    weapon,
    weapon_level,
    damage_adjustment,
    potential_level,
  );

  return StatObject.merge(result, stat_weapon);
};
