import { useEffect, useState } from "react";

import { DataWeapon } from "../types";

import { useAugments } from "./useAugments";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useWeapon } from "./useWeapon";

export const useFormWeapon = (
  storage_key: string,
): [
  DataWeapon,
  (data: DataWeapon | ((prev: DataWeapon) => DataWeapon)) => void,
] => {
  const [weapon, potentialLevel, setWeapon, setPotentialLevel] =
    useWeapon(storage_key, `${storage_key}-pl`);
  const [weaponLevel, setWeaponLevel] = useEnhancement(
    `${storage_key}-l`,
  );
  const [fixa, setFixa] = useFixa(`${storage_key}-f`);
  const { augments, setAugment } = useAugments(storage_key);

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
