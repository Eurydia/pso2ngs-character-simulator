import { useEffect, useState } from "react";
import { ActionContext } from "../assets";

import { DataWeapon } from "../types";

import { useAugments } from "./useAugments";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useWeapon } from "./useWeapon";

export const useFormWeapon = (
  form_key: string,
): [
  DataWeapon,
  (data: DataWeapon | ((prev: DataWeapon) => DataWeapon)) => void,
] => {
  const [weapon, potentialLevel, setWeapon, setPotentialLevel] =
    useWeapon(form_key, `${form_key}-pl`);
  const [weaponLevel, setWeaponLevel] = useEnhancement(
    `${form_key}-l`,
  );
  const [fixa, setFixa] = useFixa(`${form_key}-f`);
  const [augments, setAugment] = useAugments(`${form_key}-a`);

  const [data, setData] = useState<DataWeapon>(() => {
    return {
      weapon,
      weapon_level: weaponLevel,
      potential_level: potentialLevel,
      fixa,
      augments,
    };
  });

  useEffect(() => {
    const { weapon, weapon_level, fixa, augments, potential_level } =
      data;

    setWeapon(weapon);
    setPotentialLevel(potential_level);
    setWeaponLevel(weapon_level);
    setFixa(fixa);
    augments.forEach((augment, augment_index) => {
      setAugment(augment, augment_index);
    });
  }, [data]);

  return [data, setData];
};
