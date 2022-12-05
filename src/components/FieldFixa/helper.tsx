import { HTMLAttributes } from "react";
import {
  AutocompleteRenderOptionState,
  FilterOptionsState,
} from "@mui/material";
import { matchSorter } from "match-sorter";

import FieldOption from "./FieldOption";

import { Fixa } from "../../assets";

const sortOptions = (options: Fixa[]): Fixa[] => {
  return options
    .sort((a, b) => {
      const name_a: string = a.label;
      const name_b: string = b.label;

      if (name_a > name_b) {
        // sort descending
        return 1;
      }
      if (name_b > name_a) {
        return -1;
      }
      return 0;
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

export const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Fixa,
  _: AutocompleteRenderOptionState,
) => {
  return <FieldOption {...props} option={option} />;
};

export const filterOptions = (
  options: Fixa[],
  state: FilterOptionsState<Fixa>,
  size: number = 16,
) => {
  const value = state.inputValue;

  const terms = value
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);

  return sortOptions(
    terms
      .reduceRight(
        (res, term) =>
          matchSorter(res, term, {
            keys: [(item) => item.name, (item) => item.group],
          }),
        options,
      )
      .slice(0, size),
  );
};
