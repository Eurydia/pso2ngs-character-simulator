import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_SEZUN: Augment[] = [];

const makeAugmentSezun = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.SEZUN,
    [GroupEnumAugment.SEZUN],
    getAwareStatObject,
    searchable_terms,
  );
};

// --------------------------------------

(() => {
  const _getter = (ctx: ActionContext): StatObject => {
    const stat: StatObject = statObject({ [StatEnum.CORE_BP]: 10 });
    if (!ctx.time.isDuringSezunEvent) {
      return stat;
    }
    const stat_up: StatObject = statObject({
      [StatEnum.WEAPON_MELEE]: 1.15,
      [StatEnum.WEAPON_RANGED]: 1.15,
      [StatEnum.WEAPON_TECHNIQUE]: 1.15,
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.2,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.25,
    });
    return StatObject.merge(stat, stat_up);
  };

  const searchable_terms: string[] = [
    StatEnum.WEAPON_MELEE,
    StatEnum.WEAPON_RANGED,
    StatEnum.WEAPON_TECHNIQUE,
    StatEnum.ADV_OFF_CRIT_CHANCE,
    StatEnum.ADV_DEF_DAMAGE_RES,
  ];

  G_SEZUN.push(
    makeAugmentSezun("Sezun Lunafiv", 0, _getter, searchable_terms),
  );
  G_SEZUN.push(
    makeAugmentSezun(
      "Sezun Automfevre",
      0,
      _getter,
      searchable_terms,
    ),
  );
  G_SEZUN.push(
    makeAugmentSezun("Sezun Wintafiv", 0, _getter, searchable_terms),
  );
})();
