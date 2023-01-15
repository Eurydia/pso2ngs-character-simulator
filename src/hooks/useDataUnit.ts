import { useMemo } from "react";

import { Augment, Fixa, Unit } from "../assets";
import { DataUnit } from "../types";

import { useUnit } from "./useUnit";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useAugments } from "./useAugments";

export const useFormUnit = (
  storage_key: string,
): {
  dataUnit: DataUnit;
  setUnit: (next_unit: Unit | null) => void;
  setEnhancement: (next_level: number) => void;
  setFixa: (next_fixa: Fixa | null) => void;
  setAugment: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
} => {
  const { unit, setUnit } = useUnit(storage_key);
  const { enhancement, setEnhancement } = useEnhancement(storage_key);
  const { fixa, setFixa } = useFixa(storage_key);
  const { augments, setAugment } = useAugments(storage_key);

  const dataUnit = useMemo((): DataUnit => {
    return {
      unit,
      enhancement: unitLevel,
      fixa,
      augments,
    };
  }, [unit, unitLevel, fixa, augments]);

  return {
    dataUnit,
    setUnit,
    setEnhancement: setUnitLevel,
    setFixa,
    setAugment,
  };
};
