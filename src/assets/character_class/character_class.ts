import { StatEnum, statObject, StatObject } from "../stat";

const LOOKUP_TABLE: { [key: string]: CharacterClass } = {};

export type CharacterClass = {
  label: string;
  base_hp: number;
  base_pp: number;
  base_attack: number;
  base_defense: number;
};

export const CharacterClass = {
  LEVEL_MAX: 70,

  getCharacterHP: (
    base_hp: number,
    character_level: number,
  ): number => {
    return Math.round(base_hp * 1.05 ** ((character_level - 1) / 5));
  },

  getCharacterAttack: (
    base_attack: number,
    character_level: number,
  ): number => {
    return (
      Math.round(450 * 1.1 ** ((character_level - 1) / 5)) +
      (base_attack - 450)
    );
  },

  getCharacterDefense: (
    base_defense: number,
    character_level: number,
  ): number => {
    return (
      Math.round(300 * 1.08 ** ((character_level - 1) / 5)) +
      (base_defense - 300)
    );
  },

  getStatObject: (
    character_class: CharacterClass,
    character_level: number,
  ): StatObject => {
    const hp = CharacterClass.getCharacterHP(
      character_class.base_hp,
      character_level,
    );
    const attack = CharacterClass.getCharacterAttack(
      character_class.base_attack,
      character_level,
    );
    const defense = CharacterClass.getCharacterDefense(
      character_class.base_defense,
      character_level,
    );

    return statObject({
      [StatEnum.CORE_HP]: hp,
      [StatEnum.CORE_PP]: character_class.base_pp,
      [StatEnum.CORE_ATTACK]: attack,
      [StatEnum.CORE_DEFENSE]: defense,
      [StatEnum.CORE_BP]: attack + Math.floor(defense / 2),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.05,
    });
  },
};

export const characterClass = (
  label: string,
  base_hp: number,
  base_pp: number,
  base_attack: number,
  base_defense: number,
): CharacterClass => {
  const result: CharacterClass = {
    label,
    base_hp,
    base_pp,
    base_attack,
    base_defense,
  };

  LOOKUP_TABLE[label] = result;

  return result;
};
