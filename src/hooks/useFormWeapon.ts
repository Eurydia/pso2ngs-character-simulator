import { useEffect, useMemo, useState } from "react";
import { Augment, Fixa, Weapon } from "../assets";

import { DataWeapon } from "../types";

import { useAugments } from "./useAugments";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useWeapon } from "./useWeapon";

export const useFormWeapon = (
  storage_key: string,
): {
  formData: DataWeapon;
  setWeapon: (next_weapon: Weapon | null) => void;
  setPotentialLevel: (next_level: number) => void;
  setWeaponLevel: (next_level: number) => void;
  setFixa: (next_fixa: Fixa | null) => void;
  setAugment: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
} => {
  const { weapon, potentialLevel, setWeapon, setPotentialLevel } =
    useWeapon(storage_key);
  const { enhacement: weaponLevel, setEnhancement: setWeaponLevel } =
    useEnhancement(storage_key);
  const { fixa, setFixa } = useFixa(storage_key);
  const { augments, setAugment } = useAugments(storage_key);

  const formData = useMemo(() => {
    return {
      weapon,
      weapon_level: weaponLevel,
      potential_level: potentialLevel,
      fixa,
      augments,
    };
  }, [weapon, weaponLevel, potentialLevel, fixa, augments]);

  return {
    formData,
    setWeapon,
    setPotentialLevel,
    setWeaponLevel,
    setFixa,
    setAugment,
  };
};
