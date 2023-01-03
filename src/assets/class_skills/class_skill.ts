import { ActionContext } from "../context";
import { StatObject } from "../stat";
import { GroupEnumClass } from "./GroupEnum";

type getterFunction = (
  ctx: ActionContext,
  level: number,
) => StatObject;

export type Skill = {
  name: string;
  getterFunction: getterFunction;
};

export class CharacterClass {
  #class_name: GroupEnumClass;
  #skill_main: {
    [K: string]: getterFunction;
  };
  #skill_sub: {
    [K: string]: getterFunction;
  };

  constructor(
    class_name: GroupEnumClass,
    skill_main: { [K: string]: getterFunction },
    skill_sub: { [K: string]: getterFunction },
  ) {
    this.#class_name = class_name;
    this.#skill_main = skill_main;
    this.#skill_sub = skill_sub;
  }

  get keysMain(): string[] {
    return Object.keys(this.#skill_main);
  }

  get keysSub(): string[] {
    return Object.keys(this.#skill_sub);
  }

  get label(): string {
    return this.#class_name;
  }
}

export const characterClass = (
  class_name: GroupEnumClass,
  skill_main: { [K: string]: getterFunction },
  skill_sub: { [K: string]: getterFunction },
): CharacterClass => {
  return new CharacterClass(class_name, skill_main, skill_sub);
};
