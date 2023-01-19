import { StatEnum, statObject, StatObject } from "../stat";

const LOOKUP_TABLE: { [key: string]: CharClass } = {};

export type CharClass = Readonly<{
  label: string;
  base_hp: number;
  base_pp: number;
  base_attack: number;
  base_defense: number;
}>;

export const CharClass = {
  LEVEL_MAX: 65,

  fromLabel: (char_class: string): CharClass | null => {
    if (char_class in LOOKUP_TABLE) {
      return LOOKUP_TABLE[char_class];
    }
    return null;
  },

  getCharacterHP: (base_hp: number, char_level: number): number => {
    return Math.round(base_hp * 1.05 ** ((char_level - 1) / 5));
  },

  getCharacterAttack: (
    base_attack: number,
    char_level: number,
  ): number => {
    return (
      Math.round(450 * 1.1 ** ((char_level - 1) / 5)) +
      (base_attack - 450)
    );
  },

  getCharacterDefense: (
    base_defense: number,
    char_level: number,
  ): number => {
    return (
      Math.round(300 * 1.08 ** ((char_level - 1) / 5)) +
      (base_defense - 300)
    );
  },

  getStatObject: (
    char_class: CharClass,
    char_level: number,
  ): StatObject => {
    const hp = CharClass.getCharacterHP(
      char_class.base_hp,
      char_level,
    );
    const attack = CharClass.getCharacterAttack(
      char_class.base_attack,
      char_level,
    );
    const defense = CharClass.getCharacterDefense(
      char_class.base_defense,
      char_level,
    );

    const bp = attack + Math.floor(defense / 2);

    return statObject({
      [StatEnum.CORE_BP]: bp,
      [StatEnum.CORE_HP]: hp,
      [StatEnum.CORE_PP]: char_class.base_pp,
      [StatEnum.CORE_ATTACK]: attack,
      [StatEnum.CORE_DEFENSE]: defense,
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.05,
    });
  },
};

export const charClass = (
  label: string,
  base_hp: number,
  base_pp: number,
  base_attack: number,
  base_defense: number,
): CharClass => {
  const result: CharClass = {
    label,
    base_hp,
    base_pp,
    base_attack,
    base_defense,
  };

  LOOKUP_TABLE[label] = result;

  return result;
};
