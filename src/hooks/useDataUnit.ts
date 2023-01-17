import { useMemo } from "react";

import { Augment, Fixa, Unit } from "../assets";
import { DataUnit } from "../types";

import { useUnit } from "./useUnit";
import { useNumber } from "./useNumber";
import { useFixa } from "./useFixa";
import { useAugments } from "./useAugments";

export const useDataUnit = (
  storage_key: string,
): {
  dataUnit: DataUnit;
  setUnit: (next_unit: Unit | null) => void;
  setEnhancement: (next_enhancement: number) => void;
  setFixa: (next_fixa: Fixa | null) => void;
  setAugment: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
} => {
  const { unit, setUnit } = useUnit(`${storage_key}-unit`);
  const { value: enhancement, setValue: setEnhancement } = useNumber(
    `${storage_key}-enhancement`,
  );
  const { fixa, setFixa } = useFixa(`${storage_key}-fixa`);
  const { augments, setAugment } = useAugments(
    `${storage_key}-augment`,
  );

  const dataUnit = useMemo((): DataUnit => {
    return {
      unit,
      enhancement,
      fixa,
      augments,
    };
  }, [unit, enhancement, fixa, augments]);

  return {
    dataUnit,
    setUnit,
    setEnhancement,
    setFixa,
    setAugment,
  };
};
