import { FormDataUnit, FormDataUnitSetter } from "../types";

import { useUnit } from "./useUnit";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useAugments } from "./useAugments";

export const useFormDataUnit = (
  storage_key: string,
): [
  FormDataUnit & FormDataUnitSetter,
  (data: FormDataUnit) => void,
] => {
  const [unit, setUnit] = useUnit(storage_key);
  const [fixa, setFixa] = useFixa(storage_key);
  const [unitLevel, setUnitLevel] = useEnhancement(storage_key);
  const [augments, setAugments] = useAugments(storage_key);

  const setData = (data: FormDataUnit) => {
    setUnit(data.unit);
    setUnitLevel(data.unit_level);
    setFixa(data.fixa);

    data.augments.forEach((augment, augment_index) => {
      setAugments(augment, augment_index);
    });
  };

  const data: FormDataUnit = {
    unit,
    unit_level: unitLevel,
    fixa,
    augments,
  };

  const data_setter: FormDataUnitSetter = {
    setUnit,
    setUnitLevel,
    setFixa,
    setAugments,
  };

  return [{ ...data, ...data_setter }, setData];
};
