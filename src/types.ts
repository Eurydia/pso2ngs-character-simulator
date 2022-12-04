import { Augment, StatEnum, Weapon } from "./assets";

export type SettingsWeapon = {
  equipment: Weapon | null;
  augments: (Augment | null)[];
  enhancement: number;
};
