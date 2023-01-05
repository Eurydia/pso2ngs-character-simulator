import { ActionContext } from "../context";
import { StatObject } from "../stat";

import { GroupEnumAugment } from "./groupEnum";
import { toRoman } from "./helper";

export type Augment = {
  name: string;
  level: string;
  level_roman: string;
  label: string;
  group: GroupEnumAugment;
  conflict: GroupEnumAugment[];
  getterFunction: (ctx: ActionContext) => StatObject;
};

export const Augment = {
  isConflicting: (
    augment: Augment,
    group: GroupEnumAugment,
  ): boolean => {
    return augment.conflict.includes(group);
  },
};

export const augment = (
  name: string,
  augment_level: number,
  group: GroupEnumAugment,
  conflict: GroupEnumAugment[],
  getterFunction: (ctx: ActionContext) => StatObject,
): Augment => {
  const level = augment_level.toString();
  const level_roman = toRoman(augment_level);
  const label = `${name} ${level_roman}`.trimEnd();

  const result: Augment = {
    name,
    label,
    level,
    level_roman,
    group,
    conflict,
    getterFunction,
  };

  return result;
};
