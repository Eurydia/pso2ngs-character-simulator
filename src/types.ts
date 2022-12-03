import { Augment, StatEnum, Weapon } from "./assets";

export type StatObject = Partial<{ [K in StatEnum]: number }>;

export type SettingsWeapon = {
  equipment: Weapon | null;
  augments: (Augment | null)[];
  enhancement: number;
};
