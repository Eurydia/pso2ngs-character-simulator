import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Weapon } from "../../assets";

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

const reducer = (options: Weapon[], term: string): Weapon[] => {
  return matchSorter(options, term, {
    keys: [(item) => item.name, (item) => item.group],
  });
};

const collectOptions = (
  options: Weapon[],
  terms: string[],
): Weapon[] => {
  return terms.reduceRight(reducer, options);
};

export const filterOptions = (
  options: Weapon[],
  state: FilterOptionsState<Weapon>,
  size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = collectTerms(value);
  const filtered_options: Weapon[] = collectOptions(
    options,
    terms,
  ).slice(0, size);
  return filtered_options;
};
