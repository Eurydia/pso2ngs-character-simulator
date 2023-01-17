import { useCallback, useMemo, useSyncExternalStore } from "react";

import { Augment, Fixa, Weapon } from "../assets";
import { DataWeapon } from "../types";

import { useWeapon } from "./useWeapon";
import { useNumber } from "./useNumber";
import { useFixa } from "./useFixa";
import { useAugments } from "./useAugments";

export const useDataWeapon = (
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
  const { weapon, setWeapon: _setWeapon } = useWeapon(
    `${storage_key}-weapon`,
  );
  const { value: potentialLevel, setValue: setPotentialLevel } =
    useNumber(`${storage_key}-potential-level`);
  const { value: enhancement, setValue: setEnhancement } = useNumber(
    `${storage_key}-enhancement`,
  );
  const { fixa, setFixa } = useFixa(`${storage_key}-fixa`);
  const { augments, setAugment } = useAugments(
    `${storage_key}-augments`,
  );

  const setWeapon = useCallback(
    (next_weapon: Weapon | null): void => {
      _setWeapon(next_weapon);
      setPotentialLevel(0);
    },
    [],
  );

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
