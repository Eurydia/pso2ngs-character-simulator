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
  enhancement: number;
  fixa: Fixa | null;
  augments: (Augment | null)[];
};

export const DataUnit = {
  getUniqueAugments: (data: DataUnit): string[] => {
    const { unit, enhancement, augments } = data;
    if (unit === null) {
      return [];
    }
    const results: string[] = [];
    Augment.getActiveAugments(augments, enhancement).forEach(
      (augment) => {
        if (augment === null) {
          return;
        }
        results.push(augment.label);
      },
    );
    return results;
  },

  getStatObject: (ctx: ActionContext, data: DataUnit): StatObject => {
    const { unit, enhancement, fixa, augments } = data;

    if (unit === null) {
      return statObject();
    }

    let stat_total: StatObject = statObject();
    const stat_unit: StatObject = Unit.getStatObject(
      ctx,
      unit,
      enhancement,
    );
    stat_total = StatObject.merge(stat_total, stat_unit);

    const stat_fixa: StatObject = Fixa.getStatObject(ctx, fixa);
    stat_total = StatObject.merge(stat_total, stat_fixa);

    const active_augments = Augment.getActiveAugments(
      augments,
      enhancement,
    );
    for (const augment of active_augments) {
      const stat_augment: StatObject = Augment.getStatObject(
        ctx,
        augment,
      );
      stat_total = StatObject.merge(stat_total, stat_augment);
    }
    return stat_total;
  },
};

export type DataWeapon = {
  weapon: Weapon | null;
  enhancement: number;
  potential_level: number;
  fixa: Fixa | null;
  augments: (Augment | null)[];
};

export const DataWeapon = {
  getUniqueAugments: (data: DataWeapon): string[] => {
    const { weapon, enhancement, augments } = data;
    if (weapon === null) {
      return [];
    }
    const results: string[] = [];
    Augment.getActiveAugments(augments, enhancement).forEach(
      (augment) => {
        if (augment === null) {
          return;
        }
        results.push(augment.label);
      },
    );
    return results;
  },

  getStatObject: (
    ctx: ActionContext,
    data: DataWeapon,
  ): StatObject => {
    const { weapon, enhancement, potential_level, fixa, augments } =
      data;

    if (weapon === null) {
      return statObject();
    }

    let stat_total: StatObject = statObject();
    const stat_fixa: StatObject = Fixa.getStatObject(ctx, fixa);
    stat_total = StatObject.merge(stat_total, stat_fixa);

    for (const augment of augments) {
      const stat_augment: StatObject = Augment.getStatObject(
        ctx,
        augment,
      );
      stat_total = StatObject.merge(stat_total, stat_augment);
    }

    const damage_adjustment: number = StatObject.getStat(
      stat_total,
      StatEnum.ADV_OFF_FLOOR,
    );
    const stat_weapon: StatObject = Weapon.getStatObject(
      ctx,
      weapon,
      enhancement,
      damage_adjustment,
      potential_level,
    );
    return StatObject.merge(stat_total, stat_weapon);
  },
};
