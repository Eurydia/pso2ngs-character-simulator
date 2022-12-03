import { HTMLAttributes } from "react";
import {
  AutocompleteRenderOptionState,
  FilterOptionsState,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import { Augment, StatEnum } from "../../assets";

import FieldOption from "./FieldOption";

export const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Augment,
  _: AutocompleteRenderOptionState,
) => {
  return <FieldOption {...props} option={option} />;
};

export const filterOptions = (
  options: Augment[],
  state: FilterOptionsState<Augment>,
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
          keys: [
            (item) => item.name,
            (item) => item.level.toString(),
            (item) => item.group,
            (item) => item.level_roman,
          ],
        }),
      options,
    )
    .slice(0, size)
    .sort((a, b) => {
      const bp_a: number | undefined = a.stats[StatEnum.CORE_BP];
      const bp_b: number | undefined = b.stats[StatEnum.CORE_BP];

      if (bp_a !== undefined && bp_b !== undefined) {
        // sort descending
        return bp_b - bp_a;
      } else {
        return 0;
      }
    })
    .sort((a, b) => {
      if (a.group > b.group) {
        return 1;
      }
      if (a.group < b.group) {
        return -1;
      }
      return 0;
    });
};
