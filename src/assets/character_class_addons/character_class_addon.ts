import { ActionContext } from "../ContextAction";
import { StatObject } from "../stat";

export type CharacterClassAddon = {
  label: string;
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject;
};

export const CharacterClassAddon = {
  LEVEL_MAX: 20,
  getStatObject: (
    ctx: ActionContext,
    addon_skill: CharacterClassAddon,
    level: number,
  ) => {
    return addon_skill.getAwareStatObject(ctx, level - 1);
  },
};

export const characterClassAddon = (
  name: string,
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject,
): CharacterClassAddon => {
  const result: CharacterClassAddon = {
    label: name,
    getAwareStatObject,
  };

  return result;
};
