import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_DREAD: Augment[] = [];

const makeAugmentDread = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.DREAD,
    [GroupEnumAugment.DREAD],
    getAwareStatObject,
    searchable_terms,
  );
};

// --------------------------------------
// dread keeper
(() => {
  const DATA_BP: number[] = [7, 7.5, 10, 11];
  const DATA_HP: number[] = [10, 15, 30, 50];
  const DATA_PP: number[] = [3, 4, 7, 10];
  const DATA_FLOOR_UP: number[] = [1.01, 1.015, 1.02, 1.06];
  const DATA_DAMAGE_RES: number[] = [1.01, 1.015, 1.02, 1.03];
  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const hp: number = DATA_HP[level_index];
    const pp: number = DATA_PP[level_index];
    const floor_up: number = DATA_FLOOR_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];

    const dread_augment: Augment = makeAugmentDread(
      "Dread Keeper",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: hp,
          [StatEnum.CORE_PP]: pp,
          [StatEnum.ADV_OFF_FLOOR]: floor_up,
          [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
        });
      },
      [
        StatEnum.CORE_HP,
        StatEnum.CORE_PP,
        StatEnum.ADV_OFF_FLOOR,
        StatEnum.ADV_DEF_DAMAGE_RES,
      ],
    );
    G_DREAD.push(dread_augment);
  });
})();
