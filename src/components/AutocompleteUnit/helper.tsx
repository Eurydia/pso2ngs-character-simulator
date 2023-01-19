import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Unit } from "../../assets";

const extractTerms = (value: string): string[] => {
  const items: string[] = value.split(" ");
  const terms: string[] = [];
  items.forEach((item) => {
    const item_trimmed = item.trim();
    if (item_trimmed === "") {
      return;
    }
    terms.push(item_trimmed);
  });
  return terms;
};

const termReducer = (options: Unit[], term: string): Unit[] => {
  return matchSorter(options, term, {
    keys: [(item) => item.label, (item) => item.rarity],
  });
};

const sieveOptions = (options: Unit[], terms: string[]): Unit[] => {
  return terms.reduceRight(termReducer, options);
};

export const filterOptions = (
  options: Unit[],
  state: FilterOptionsState<Unit>,
  result_size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = extractTerms(value);
  const filtered_options: Unit[] = sieveOptions(options, terms).slice(
    0,
    result_size,
  );
  return filtered_options;
};

export const getOptionDisabled = (
  option: Unit,
  charLevel: number,
): boolean => {
  return option.level_required > charLevel;
};
