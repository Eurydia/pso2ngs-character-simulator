import { ActionContext } from "../context";
import { StatObject } from "../stat";

import { GroupEnumAugment } from "./groupEnum";

const LOOKUP_AUGMENT: { [key: string]: Augment } = {};

const ROMAN_LOOKUP: { [key: number]: string } = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
};
const _toRoman = (num: number): string => {
  if (num < 0) {
    return "";
  }
  return ROMAN_LOOKUP[num];
};

export const _getAugmentSlot = (level: number): number => {
  if (level >= 50) {
    return 5;
  }
  if (level >= 40) {
    return 4;
  }
  if (level >= 20) {
    return 3;
  }
  return 2;
};

export type Augment = {
  name: string;
  level: string;
  level_roman: string;
  label: string;
  group: GroupEnumAugment;
  conflict: GroupEnumAugment[];
  getAwareStatObject: (ctx: ActionContext) => StatObject;
};

export const Augment = {
  // isConflicting: (
  //   augment: Augment,
  //   group: GroupEnumAugment,
  // ): boolean => {
  //   return augment.conflict.includes(group);
  // },

  toString: (items: (Augment | null)[]): string => {
    const labels: string[] = [];
    for (const item of items) {
      if (item === null) {
        continue;
      }
      labels.push(item.label);
    }
    return JSON.stringify(labels);
  },

  fromLabels: (labels: string[]): Augment[] => {
    const items: Augment[] = [];
    for (const label of labels) {
      const augment: Augment | undefined = LOOKUP_AUGMENT[label];
      if (augment === undefined) {
        continue;
      }
      items.push(augment);
    }
    return items;
  },

  getAugmentSlot: (level: number): number => {
    return _getAugmentSlot(level);
  },

  removeConflict: (
    item_index: number,
    items: (Augment | null)[],
  ): (Augment | null)[] => {
    let result: (Augment | null)[] = [...items];
    const next_item: Augment | null = items[item_index];
    if (next_item === null) {
      return result;
    }
    items.forEach((prev_item, index) => {
      if (index === item_index) {
        return;
      }
      if (prev_item === null) {
        return;
      }
      if (next_item.name === prev_item.name) {
        result[index] = null;
        return;
      }
      if (
        next_item.name === "Mastery" &&
        prev_item.group === GroupEnumAugment.FUSED
      ) {
        return;
      }
      if (
        prev_item.name === "Mastery" &&
        next_item.group === GroupEnumAugment.FUSED
      ) {
        return;
      }
      if (next_item.conflict.includes(prev_item.group)) {
        result[index] = null;
        return;
      }
    });
    return result;
  },
};

export const augment = (
  name: string,
  augment_level: number,
  group: GroupEnumAugment,
  conflict: GroupEnumAugment[],
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  const level = augment_level.toString();
  const level_roman = _toRoman(augment_level);
  const label = `${name} ${level_roman}`.trimEnd();

  const result: Augment = {
    name,
    label,
    level,
    level_roman,
    group,
    conflict,
    getAwareStatObject,
  };

  LOOKUP_AUGMENT[label] = result;

  return result;
};
