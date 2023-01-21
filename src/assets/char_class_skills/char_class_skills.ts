import { ActionContext } from "../ContextAction";
import { statObject, StatObject } from "../stat";

export type CharClassSkill = Readonly<{
  label: string;
  level_max: number;
  getAwareStatObjectMain:
    | ((ctx: ActionContext, level_index: number) => StatObject)
    | null;
  getAwareStatObjectSub:
    | ((ctx: ActionContext, level_index: number) => StatObject)
    | null;
}>;

export const CharClassSkill = {
  SKILLPOINT_MAX: 47,

  getStatObjectMain: (
    ctx: ActionContext,
    class_skill: CharClassSkill,
    level: number,
  ): StatObject => {
    if (level < 1 || level > class_skill.level_max) {
      return statObject();
    }
    const level_index: number = level - 1;
    if (class_skill.getAwareStatObjectMain === null) {
      return statObject();
    }
    return class_skill.getAwareStatObjectMain(ctx, level_index);
  },

  getStatObjectSub: (
    ctx: ActionContext,
    class_skill: CharClassSkill,
    level: number,
  ): StatObject => {
    if (level < 1 || level > class_skill.level_max) {
      return statObject();
    }
    const level_index: number = level - 1;
    if (class_skill.getAwareStatObjectSub === null) {
      return statObject();
    }
    return class_skill.getAwareStatObjectSub(ctx, level_index);
  },
};

export const charClassSkill = (
  label: string,
  level_max: number,
  getAwareStatObjectMain:
    | ((ctx: ActionContext, level: number) => StatObject)
    | null,
  getAwareStatObjectSub:
    | ((ctx: ActionContext, level: number) => StatObject)
    | null,
): CharClassSkill => {
  const result: CharClassSkill = {
    label,
    level_max,
    getAwareStatObjectMain,
    getAwareStatObjectSub,
  };

  return result;
};
