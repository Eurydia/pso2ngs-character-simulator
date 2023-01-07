import { useEffect, useState } from "react";

import { FormDataWeapon } from "../types";

import { useAugments } from "./useAugments";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useWeapon } from "./useWeapon";

export const useFormWeapon = (
  form_key: string,
): [
  FormDataWeapon,
  (
    data: FormDataWeapon | ((prev: FormDataWeapon) => FormDataWeapon),
  ) => void,
] => {
  const [weapon, potentiaLevel, setWeapon, setPotentialLevel] =
    useWeapon(form_key, `${form_key}-pl`);
  const [weaponLevel, setWeaponLevel] = useEnhancement(
    `${form_key}-l`,
  );
  const [fixa, setFixa] = useFixa(`${form_key}-f`);
  const [augments, setAugment] = useAugments(`${form_key}-a`);

  const [data, setData] = useState<FormDataWeapon>({
    weapon: null,
    weapon_level: 0,
    potential_level: 0,
    fixa: null,
    augments: [],
  });

  useEffect(() => {
    setData({
      weapon,
      weapon_level: weaponLevel,
      potential_level: potentiaLevel,
      fixa,
      augments,
    });
  }, []);

  useEffect(() => {
    setWeapon(data.weapon);
    setPotentialLevel(data.potential_level);
    setWeaponLevel(data.weapon_level);
    setFixa(data.fixa);
    data.augments.forEach((augment, augment_index) => {
      setAugment(augment, augment_index);
    });
  }, [data]);

  return [data, setData];
};
