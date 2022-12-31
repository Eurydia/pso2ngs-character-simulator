import { ActionContext } from "../../context";
import { StatEnum, StatObject, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const g_sezun: Augment[] = [];

const makeAugmentSezun = (
  name: string,
  level: number,
  getStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.SEZUN,
    [GroupEnumAugment.SEZUN],
    getStatObject,
  );
};

// --------------------------------------
const _getStatObject = (ctx: ActionContext): StatObject => {
  const stat: StatObject = statObject({ [StatEnum.CORE_BP]: 10 });

  if (ctx.time === undefined) {
    return stat;
  }

  if (ctx.time.isDuringSezunEvent) {
    stat.setStat(StatEnum.WEAPON_MELEE, 1.15);
    stat.setStat(StatEnum.WEAPON_RANGED, 1.15);
    stat.setStat(StatEnum.WEAPON_TECHNIQUE, 1.15);
    stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, 0.2);
    stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, 1.25);
  }

  return stat;
};

g_sezun.push(makeAugmentSezun("Sezun Lunafiv", 0, _getStatObject));
g_sezun.push(makeAugmentSezun("Sezun Automfevre", 0, _getStatObject));
g_sezun.push(makeAugmentSezun("Sezun Wintafiv", 0, _getStatObject));
