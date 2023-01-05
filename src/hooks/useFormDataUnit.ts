import { Augment, Fixa, Unit } from "../../assets";
import { FormDataUnit } from "../../types";
import { useAugments } from "../useAugments";

import { useEnhancement } from "../useEnhancement";
import { useFixa } from "../useFixa";
import { useUnit } from "../useUnit";

type FormDataUnitSetter = {
  onUnitChange: (unit: Unit | null) => void;
  onFixaChange: (fixa: Fixa | null) => void;
  onAugmentChange: (augment: Augment | null, index: number) => void;
  onUnitLevelChange: (level: number) => void;
};

export const useFormDataUnit = (
  storage_key: string,
): [FormDataUnit, FormDataUnitSetter] => {
  const [unit, setUnit] = useUnit(storage_key);
  const [fixa, setFixa] = useFixa(storage_key);
  const [unitLevel, setUnitLevel] = useEnhancement(storage_key);
  const [augments, setAugments] = useAugments(storage_key);

  const data: FormDataUnit = {
    unit,
    unit_level: unitLevel,
    fixa,
    augments,
  };

  const data_setter: FormDataUnitSetter = {
    onUnitChange: setUnit,
    onUnitLevelChange: setUnitLevel,
    onFixaChange: setFixa,
    onAugmentChange: setAugments,
  };

  return [data, data_setter];
};
