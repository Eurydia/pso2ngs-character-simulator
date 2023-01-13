import { useCallback, useMemo } from "react";

import {
  ActionContext,
  Augment,
  Fixa,
  StatObject,
  Unit,
} from "../assets";
import { DataUnit } from "../types";

import { useUnit } from "./useUnit";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useAugments } from "./useAugments";

export const useFormUnit = (
  storage_key: string,
): {
  formData: DataUnit;
  setUnit: (next_unit: Unit | null) => void;
  setUnitLevel: (next_level: number) => void;
  setFixa: (next_fixa: Fixa | null) => void;
  setAugment: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
  getStatObject: (ctx: ActionContext) => StatObject;
} => {
  const { unit, setUnit } = useUnit(storage_key);
  const { enhacement: unitLevel, setEnhancement: setUnitLevel } =
    useEnhancement(storage_key);
  const { fixa, setFixa } = useFixa(storage_key);
  const { augments, setAugment } = useAugments(storage_key);

  const formData = useMemo((): DataUnit => {
    return {
      unit,
      unit_level: unitLevel,
      fixa,
      augments,
    };
  }, [unit, unitLevel, fixa, augments]);

  const getStatObject = useCallback(
    (ctx: ActionContext): StatObject => {
      return DataUnit.getStatObject(ctx, formData);
    },
    [formData],
  );

  return {
    formData,
    setUnit,
    setUnitLevel,
    setFixa,
    setAugment,
    getStatObject,
  };
};
