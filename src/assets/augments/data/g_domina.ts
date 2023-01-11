import { ActionContext } from "../../../contexts/ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_DOMINA: Augment[] = [];

const makeAugmentDomina = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.DOMINA,
    [GroupEnumAugment.DOMINA],
    getAwareStatObject,
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
  ),
);
