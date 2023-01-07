import { useEffect, useState } from "react";

import { FormDataUnit } from "../types";

import { useAugments } from "./useAugments";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useUnit } from "./useUnit";

export const useFormUnit = (
  form_key: string,
): [
  FormDataUnit,
  (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ) => void,
] => {
  const [unit, setUnit] = useUnit(form_key);
  const [unitLevel, setUnitLevel] = useEnhancement(`${form_key}-l`);
  const [fixa, setFixa] = useFixa(`${form_key}-f`);
  const [augments, setAugment] = useAugments(`${form_key}-a`);

  const [data, setData] = useState<FormDataUnit>({
    unit: null,
    unit_level: 0,
    fixa: null,
    augments: [],
  });

  useEffect(() => {
    setData({ unit, unit_level: unitLevel, fixa, augments });
  }, []);

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
