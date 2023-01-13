import {
  ActionContext,
  Augment,
  Fixa,
  StatEnum,
  statObject,
  StatObject,
  Unit,
  Weapon,
} from "./assets";

export type Nullable<T> = { [P in keyof T]: T[P] | null };

export type DataUnit = {
  unit: Unit | null;
  unit_level: number;
  fixa: Fixa | null;
  augments: (Augment | null)[];
};

export const DataUnit = {
  getStatObject: (ctx: ActionContext, data: DataUnit): StatObject => {
    const { unit, unit_level, fixa, augments } = data;

    if (unit === null) {
      return statObject();
    }

    let result: StatObject = statObject();
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
      const stat_augment: StatObject =
        augment.getAwareStatObject(ctx);
      result = StatObject.merge(result, stat_augment);
    }
    return result;
  },
};

export type DataWeapon = {
  weapon: Weapon | null;
  weapon_level: number;
  potential_level: number;
  fixa: Fixa | null;
  augments: (Augment | null)[];
};

export const DataWeapon = {
  getStatObject: (
    ctx: ActionContext,
    data: DataWeapon,
  ): StatObject => {
    const { weapon, weapon_level, potential_level, fixa, augments } =
      data;

    if (weapon === null) {
      return statObject();
    }

    let result: StatObject = statObject();
    if (fixa !== null) {
      const stat_fixa: StatObject = fixa.getAwareStatObject(ctx);
      result = StatObject.merge(result, stat_fixa);
    }
    for (const augment of augments) {
      if (augment === null) {
        continue;
      }
      const stat_augment: StatObject =
        augment.getAwareStatObject(ctx);
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
  },
};

export type DataAddon = {};

export const DataAddon = {
  getStatObject: (
    ctx: ActionContext,
    data: DataAddon,
  ): StatObject => {
    return statObject();
  },
};
