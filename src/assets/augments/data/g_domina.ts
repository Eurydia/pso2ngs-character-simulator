import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_DOMINA: Augment[] = [];

const makeAugmentDomina = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.DOMINA,
    [GroupEnumAugment.DOMINA],
    getAwareStatObject,
    searchable_terms,
  );
};

// --------------------------------------
// ael
G_DOMINA.push(
  makeAugmentDomina(
    "Ael Domina",
    0,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_HP]: 5,
        [StatEnum.CORE_PP]: 3,
        [StatEnum.WEAPON_MELEE]: 1.015,
        [StatEnum.WEAPON_RANGED]: 1.015,
        [StatEnum.WEAPON_TECHNIQUE]: 1.015,
      });
    },
    [
      StatEnum.CORE_HP,
      StatEnum.CORE_PP,
      StatEnum.WEAPON_MELEE,
      StatEnum.WEAPON_RANGED,
      StatEnum.WEAPON_TECHNIQUE,
    ],
  ),
);

// --------------------------------------
// ret
G_DOMINA.push(
  makeAugmentDomina(
    "Ret Domina",
    0,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_HP]: 15,
        [StatEnum.WEAPON_MELEE]: 1.015,
        [StatEnum.WEAPON_RANGED]: 1.015,
        [StatEnum.WEAPON_TECHNIQUE]: 1.015,
      });
    },
    [
      StatEnum.CORE_HP,
      StatEnum.WEAPON_MELEE,
      StatEnum.WEAPON_RANGED,
      StatEnum.WEAPON_TECHNIQUE,
    ],
  ),
);

// --------------------------------------
// kvar
G_DOMINA.push(
  makeAugmentDomina(
    "Kvar Domina",
    0,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_PP]: 5,
        [StatEnum.WEAPON_MELEE]: 1.015,
        [StatEnum.WEAPON_RANGED]: 1.015,
        [StatEnum.WEAPON_TECHNIQUE]: 1.015,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 0.98,
      });
    },
    [
      StatEnum.CORE_PP,
      StatEnum.WEAPON_MELEE,
      StatEnum.WEAPON_RANGED,
      StatEnum.WEAPON_TECHNIQUE,
      StatEnum.ADV_DEF_DAMAGE_RES,
    ],
  ),
);

// --------------------------------------
// stira
G_DOMINA.push(
  makeAugmentDomina(
    "Stira Domina",
    0,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: 10,
        [StatEnum.WEAPON_MELEE]: 1.03,
        [StatEnum.WEAPON_RANGED]: 1.03,
        [StatEnum.WEAPON_TECHNIQUE]: 1.03,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 0.98,
      });
    },
    [
      StatEnum.WEAPON_MELEE,
      StatEnum.WEAPON_RANGED,
      StatEnum.WEAPON_TECHNIQUE,
      StatEnum.ADV_DEF_DAMAGE_RES,
    ],
  ),
);
