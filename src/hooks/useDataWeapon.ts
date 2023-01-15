import { useMemo } from "react";

import { Augment, Fixa, Weapon } from "../assets";
import { DataWeapon } from "../types";

import { useWeapon } from "./useWeapon";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useAugments } from "./useAugments";

export const useDataUnit = (
  storage_key: string,
): {
  dataWeapon: DataWeapon;
  setWeapon: (next_weapon: Weapon | null) => void;
  setPotentialLevel: (next_level: number) => void;
  setEnhancement: (next_enhancement: number) => void;
  setFixa: (next_fixa: Fixa | null) => void;
  setAugment: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
} => {
  const { weapon, potentialLevel, setWeapon, setPotentialLevel } =
    useWeapon(storage_key);
  const { enhancement, setEnhancement } = useEnhancement(storage_key);
  const { fixa, setFixa } = useFixa(storage_key);
  const { augments, setAugment } = useAugments(storage_key);

  const dataWeapon = useMemo((): DataWeapon => {
    return {
      weapon,
      potential_level: potentialLevel,
      enhancement,
      fixa,
      augments,
    };
  }, [weapon, potentialLevel, enhancement, fixa, augments]);

  return {
    dataWeapon,
    setWeapon,
    setPotentialLevel,
    setEnhancement,
    setFixa,
    setAugment,
  };
};
