import { romanize } from "romans";

import { ActionContext } from "../context";
import { StatObject } from "../stat";

import { GroupEnumAugment } from "./groupEnum";

export type Augment = {
  name: string;
  level: string;
  level_roman: string;
  label: string;
  group: GroupEnumAugment;
  getStatObject: (ctx: ActionContext) => StatObject;
  isConflictingWith: (group: GroupEnumAugment) => boolean;
};

export const augment = (
  name: string,
  level: number,
  group: GroupEnumAugment,
  conflict: GroupEnumAugment[],
  getStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  let level_roman: string = "";
  if (level > 0) {
    level_roman = romanize(level);
  }

  const label = `${name} ${level_roman}`.trimEnd();

  const _conflict: Set<GroupEnumAugment> = new Set(conflict);
  const isConflictingWith = (group: GroupEnumAugment): boolean => {
    return _conflict.has(group);
  };

  const result: Augment = {
    name,
    label,
    level: level.toString(),
    level_roman,
    group,
    getStatObject: getStatObject,
    isConflictingWith: isConflictingWith,
  };

  return result;
};
