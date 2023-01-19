import { ActionContext } from "../ContextAction";
import { statObject, StatObject } from "../stat";

import { GroupEnumAugment } from "./groupEnum";

const AUGMENT_LOOKUP: { [key: string]: Augment } = {};

const ROMAN_LOOKUP: { [key: number]: string } = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
};
const _toRoman = (num: number): string => {
  if (num < 1) {
    return "";
  }
  return ROMAN_LOOKUP[num];
};

export type Augment = Readonly<{
  name: string;
  level: string;
  level_roman: string;
  label: string;
  group: GroupEnumAugment;
  conflict: GroupEnumAugment[];
  getAwareStatObject: (ctx: ActionContext) => StatObject;
}>;

export const Augment = {
  toString: (augments: (Augment | null)[]): string => {
    const labels: string[] = [];
    for (const item of augments) {
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
      const augment: Augment | undefined = AUGMENT_LOOKUP[label];
      if (augment !== undefined) {
        items.push(augment);
      }
    }
    return items;
  },

  getActiveSlots: (enhancement: number): number => {
    if (enhancement >= 50) {
      return 5;
    }
    if (enhancement >= 40) {
      return 4;
    }
    if (enhancement >= 20) {
      return 3;
    }
    return 2;
  },

  getActiveAugments: (
    augments: (Augment | null)[],
    enhancement: number,
  ): (Augment | null)[] => {
    const active_slots: number = Augment.getActiveSlots(enhancement);
    return augments.slice(0, active_slots);
  },

  getStatObject: (
    ctx: ActionContext,
    augment: Augment | null,
  ): StatObject => {
    if (augment === null) {
      return statObject();
    }
    return augment.getAwareStatObject(ctx);
  },

  removeConflict: (
    augments: (Augment | null)[],
    next_augment_index: number,
  ): (Augment | null)[] => {
    let result: (Augment | null)[] = [...augments];
    const next_augment: Augment | null = augments[next_augment_index];
    if (next_augment === null) {
      return result;
    }
    augments.forEach((prev_item, augment_index) => {
      if (augment_index === next_augment_index) {
        return;
      }
      if (prev_item === null) {
        return;
      }
      if (next_augment.name === prev_item.name) {
        result[augment_index] = null;
        return;
      }
      if (
        next_augment.name === "Mastery" &&
        prev_item.group === GroupEnumAugment.FUSED
      ) {
        return;
      }
      if (
        prev_item.name === "Mastery" &&
        next_augment.group === GroupEnumAugment.FUSED
      ) {
        return;
      }
      if (next_augment.conflict.includes(prev_item.group)) {
        result[augment_index] = null;
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

  AUGMENT_LOOKUP[label] = result;

  return result;
};
