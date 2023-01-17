import { ActionContext } from "../ContextAction";
import { statObject, StatObject } from "../stat";

type GetterSignature = (
  ctx: ActionContext,
  level_index: number,
) => StatObject;

export type CharacterClassSkill = {
  label: string;
  level_max: number;
  getAwareStatObjectMain: GetterSignature | null;
  getAwareStatObjectSub: GetterSignature | null;
};

export const CharacterClassSkill = {
  getStatObjectMain: (
    ctx: ActionContext,
    skill: CharacterClassSkill,
    level: number,
  ): StatObject => {
    if (level < 1 || level > skill.level_max) {
      return statObject();
    }
    const level_index: number = level - 1;
    if (skill.getAwareStatObjectMain === null) {
      return statObject();
    }
    return skill.getAwareStatObjectMain(ctx, level_index);
  },

  getStatObjectSub: (
    ctx: ActionContext,
    skill: CharacterClassSkill,
    level: number,
  ): StatObject => {
    if (level < 1 || level > skill.level_max) {
      return statObject();
    }
    const level_index: number = level - 1;
    if (skill.getAwareStatObjectSub === null) {
      return statObject();
    }
    return skill.getAwareStatObjectSub(ctx, level_index);
  },
};

export const characterClassSkill = (
  label: string,
  level_max: number,
  getAwareStatObjectMain: GetterSignature | null,
  getAwareStatObjectSub: GetterSignature | null,
): CharacterClassSkill => {
  const result: CharacterClassSkill = {
    label,
    level_max,
    getAwareStatObjectMain,
    getAwareStatObjectSub,
  };

  return result;
};
