import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Food } from "../../assets";

const extractTerms = (value: string): string[] => {
  const terms: string[] = [];
  const items: string[] = value.split(" ");
  for (const item of items) {
    const item_trimmed = item.trim();
    if (item_trimmed === "") {
      continue;
    }
    terms.push(item_trimmed);
  }
  return terms;
};

const termReducer = (options: Food[], term: string): Food[] => {
  return matchSorter(options, term, {
    keys: [(item) => item.attribute, (item) => item.category],
  });
};

const sieveOptions = (options: Food[], terms: string[]): Food[] => {
  const fitlered_options: Food[] = terms.reduceRight(
    termReducer,
    options,
  );
  return fitlered_options;
};

export const filterOptions = (
  options: Food[],
  state: FilterOptionsState<Food>,
  size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = extractTerms(value);
  const filtered_options: Food[] = sieveOptions(options, terms).slice(
    0,
    size,
  );
  return filtered_options;
};
