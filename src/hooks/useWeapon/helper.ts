import { toSafeInteger as ld_toSafeInteger } from "lodash";
import { useState } from "react";
import { AssetWeapons, Weapon } from "../../assets";
import { isValidJSON } from "../utility";

const LOOKUP_TABLE = ((): { [key: string]: Weapon } => {
  const table: { [key: string]: Weapon } = {};
  for (const weapon of AssetWeapons) {
    const label = weapon.label;
    table[label] = weapon;
  }
  return table;
})();

export const saveWeapon = (
  storage_key: string,
  weapon: Weapon | null,
): void => {
  let label: string | null = null;
  if (weapon !== null) {
    label = weapon.label;
  }

  localStorage.setItem(storage_key, JSON.stringify(label));
};

export const retrieveWeapon = (
  storage_key: string,
): Weapon | null => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return null;
  }

  if (!isValidJSON(loaded_string)) {
    return null;
  }

  const label: string | null = JSON.parse(loaded_string);
  if (label === null) {
    return null;
  }

  const weapon: Weapon | undefined = LOOKUP_TABLE[label];
  if (weapon === undefined) {
    return null;
  }

  return weapon;
};

export const savePotentialLevel = (
  storage_key: string,
  level: number,
): void => {
  localStorage.setItem(storage_key, JSON.stringify(level));
};

export const retrievePotentialLevel = (
  storage_key: string,
): number => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);

  return ld_toSafeInteger(loaded_string);
};
