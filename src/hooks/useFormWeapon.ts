import { useCallback, useMemo } from "react";

import {
  ActionContext,
  Augment,
  Fixa,
  StatObject,
  Weapon,
} from "../assets";
import { DataWeapon } from "../types";

import { useWeapon } from "./useWeapon";
import { useEnhancement } from "./useEnhancement";
import { useFixa } from "./useFixa";
import { useAugments } from "./useAugments";

export const useFormWeapon = (
  storage_key: string,
): {
  formData: DataWeapon;
  setWeapon: (next_weapon: Weapon | null) => void;
  setPotentialLevel: (next_level: number) => void;
  setWeaponLevel: (next_level: number) => void;
  setFixa: (next_fixa: Fixa | null) => void;
  setAugment: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
  getStatObject: (ctx: ActionContext) => StatObject;
} => {
  const KEY: string = `${storage_key}-form-weapon`;

  const { weapon, potentialLevel, setWeapon, setPotentialLevel } =
    useWeapon(KEY);
  const { enhacement: weaponLevel, setEnhancement: setWeaponLevel } =
    useEnhancement(KEY);
  const { fixa, setFixa } = useFixa(KEY);
  const { augments, setAugment } = useAugments(KEY);

  const formData = useMemo((): DataWeapon => {
    return {
      weapon,
      weapon_level: weaponLevel,
      potential_level: potentialLevel,
      fixa,
      augments,
    };
  }, [weapon, weaponLevel, potentialLevel, fixa, augments]);

  const getStatObject = useCallback(
    (ctx: ActionContext): StatObject => {
      return DataWeapon.getStatObject(ctx, formData);
    },
    [formData],
  );

  return {
    formData,
    setWeapon,
    setPotentialLevel,
    setWeaponLevel,
    setFixa,
    setAugment,
    getStatObject,
  };
};
