import { useEffect, useState } from "react";

import { DataUnit } from "../types";

import { useAugments } from "./useAugments";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useUnit } from "./useUnit";

export const useFormUnit = (
  form_key: string,
): [
  DataUnit,
  (data: DataUnit | ((prev: DataUnit) => DataUnit)) => void,
] => {
  const [unit, setUnit] = useUnit(form_key);
  const [unitLevel, setUnitLevel] = useEnhancement(`${form_key}-l`);
  const [fixa, setFixa] = useFixa(`${form_key}-f`);
  const [augments, setAugment] = useAugments(`${form_key}-a`);

  const [data, setData] = useState<DataUnit>(() => {
    return { unit, unit_level: unitLevel, fixa, augments };
  });

  useEffect(() => {
    setUnit(data.unit);
    setUnitLevel(data.unit_level);
    setFixa(data.fixa);
    data.augments.forEach((augment, augment_index) => {
      setAugment(augment, augment_index);
    });
  }, [data]);

  return [data, setData];
};
