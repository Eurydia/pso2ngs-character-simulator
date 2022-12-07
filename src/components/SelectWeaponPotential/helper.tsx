import { HTMLAttributes } from "react";
import {
  AutocompleteRenderOptionState,
  FilterOptionsState,
} from "@mui/material";
import { matchSorter } from "match-sorter";

import FieldOption from "./SelectWeaponPotentialOption";

import { StatEnum, WeaponPotential } from "../../assets";

// const sortOptions = (
//   options: WeaponPotential[],
// ): WeaponPotential[] => {
//   return options
//     .sort((a, b) => {
//       const atk_a: number | undefined =
//         a.stats.stats[StatEnum.CORE_ATTACK];
//       const atk_b: number | undefined =
//         b.stats.stats[StatEnum.CORE_ATTACK];

//       if (atk_a !== undefined && atk_b !== undefined) {
//         // sort descending
//         return atk_b - atk_a;
//       }

//       return 0;
//     })
//     .sort((a, b) => {
//       if (a.group > b.group) {
//         return 1;
//       }
//       if (a.group < b.group) {
//         return -1;
//       }
//       return 0;
//     });
// };

export const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: WeaponPotential,
  _: AutocompleteRenderOptionState,
) => {
  return <FieldOption {...props} option={option} />;
};

export const filterOptions = (
  options: WeaponPotential[],
  state: FilterOptionsState<Weapon>,
  size: number = 16,
) => {
  const value = state.inputValue;

  const terms = value
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);

  return terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: [(item) => item.name, (item) => item.group],
        }),
      options,
    )
    .slice(0, size);
};
