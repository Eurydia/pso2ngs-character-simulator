import { Add } from "@mui/icons-material";
import { ActionContext } from "../ContextAction";
import { statObject, StatObject } from "../stat";

export type AddonSkill = {
  label: string;
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject;
};

export const AddonSkill = {
  LEVEL_MAX: 20,
  getStatObject: (
    ctx: ActionContext,
    addon_skill: AddonSkill,
    level: number,
  ) => {
    if (level < 1 || level > AddonSkill.LEVEL_MAX) {
      return statObject();
    }
    return addon_skill.getAwareStatObject(ctx, level - 1);
  },
};

export const addonSkill = (
  name: string,
  getAwareStatObject: (
    ctx: ActionContext,
    level_index: number,
  ) => StatObject,
): AddonSkill => {
  const result: AddonSkill = {
    label: name,
    getAwareStatObject,
  };

  return result;
};
