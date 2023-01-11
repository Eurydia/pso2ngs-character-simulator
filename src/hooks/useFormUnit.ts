import { useEffect, useMemo, useState } from "react";
import { Augment } from "../assets";

import { DataUnit } from "../types";

import { useAugments } from "./useAugments";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useUnit } from "./useUnit";

export const useFormUnit = (
  storage_key: string,
): [
  DataUnit,
  (dispatch: DataUnit | ((prev: DataUnit) => DataUnit)) => void,
] => {
  const [unit, setUnit] = useUnit(storage_key);
  const [unitLevel, setUnitLevel] = useEnhancement(
    `${storage_key}-l`,
  );
  const [fixa, setFixa] = useFixa(`${storage_key}-f`);
  const [augments, setAugment] = useAugments(`${storage_key}-a`);

  const [data, setData] = useState<DataUnit>(() => {
    return { unit, unit_level: unitLevel, fixa, augments };
  });

  useEffect(() => {
    const { unit, unit_level, fixa, augments } = data;
    setUnit(unit);
    setUnitLevel(unit_level);
    setFixa(fixa);
    augments.forEach((augment, augment_index) => {
      setAugment(augment, augment_index);
    });
  }, [data]);

  return [data, setData];
};
