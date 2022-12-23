import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Fixa } from "../../assets";

const extractTerms = (value: string): string[] => {
  const items: string[] = value.split(" ");
  const terms: string[] = [];

  for (const item of items) {
    const item_trimmed = item.trim();

    if (item_trimmed === "") {
      continue;
    }

    terms.push(item_trimmed);
  }

  return terms;
};

const termReducer = (options: Fixa[], term: string): Fixa[] => {
  return matchSorter(options, term, {
    keys: [(item) => item.name, (item) => item.level],
  });
};

const sieveOptions = (options: Fixa[], terms: string[]): Fixa[] => {
  return terms.reduceRight(termReducer, options);
};

export const filterOptions = (
  options: Fixa[],
  state: FilterOptionsState<Fixa>,
  size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = extractTerms(value);
  const filtered_options: Fixa[] = sieveOptions(options, terms).slice(
    0,
    size,
  );
  return filtered_options;
};
