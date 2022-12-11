import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Unit } from "../../assets";

const collectTerms = (value: string): string[] => {
  const terms: string[] = [];

  for (const item of value.split(" ")) {
    const item_trimmed = item.trim();

    if (item_trimmed.length === 0) {
      continue;
    }

    terms.push(item_trimmed);
  }
  return terms;
};

const reducer = (options: Unit[], term: string): Unit[] => {
  return matchSorter(options, term, {
    keys: [(item) => item.name, (item) => item.group],
  });
};

const collectOptions = (options: Unit[], terms: string[]): Unit[] => {
  return terms.reduceRight(reducer, options);
};

export const filterOptions = (
  options: Unit[],
  state: FilterOptionsState<Unit>,
  size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = collectTerms(value);
  const filtered_options: Unit[] = collectOptions(
    options,
    terms,
  ).slice(0, size);
  return filtered_options;
};
