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
  #skills_main: {
    [K: string]: getterFunction;
  };
  #skills_sub: {
    [K: string]: getterFunction;
  };

  constructor(
    class_name: GroupEnumClass,
    skills_main: { [K: string]: getterFunction },
    skills_sub: { [K: string]: getterFunction },
  ) {
    this.#class_name = class_name;
    this.#skills_main = skills_main;
    this.#skills_sub = skills_sub;
  }

  get keysMain(): string[] {
    return Object.keys(this.#skills_main);
  }

  get keysSub(): string[] {
    return Object.keys(this.#skills_sub);
  }

  get label(): string {
    return this.#class_name;
  }
}

export const characterClass = (
  class_name: GroupEnumClass,
  skills_main: { [K: string]: getterFunction },
  skills_sub: { [K: string]: getterFunction },
): CharacterClass => {
  return new CharacterClass(class_name, skills_main, skills_sub);
};
