import { ActionContext } from "../ContextAction";
import { StatObject } from "../stat";

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

export const CharacterClassSkill = {};

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
