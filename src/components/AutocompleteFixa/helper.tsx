import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Fixa } from "../../assets";

const sortAlphabet = (a: string, b: string): number => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};
const sortOptions = (options: Fixa[]): Fixa[] => {
  return options.sort((a, b) => sortAlphabet(a.label, b.label));
};

const collectTerms = (value: string): string[] => {
  const terms: string[] = [];

  for (const item of value.split(" ")) {
    const item_trimmed = item.trim();

    if (item_trimmed.length <= 0) {
      continue;
    }

    terms.push(item_trimmed);
  }

  return terms;
};

const collectOptions = (options: Fixa[], terms: string[]): Fixa[] => {
  return terms.reduceRight(
    (prev, curr) =>
      matchSorter(prev, curr, {
        keys: [(item) => item.name, (item) => item.level.toString()],
      }),
    options,
  );
};

export const filterOptions = (
  options: Fixa[],
  state: FilterOptionsState<Fixa>,
  size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = collectTerms(value);
  const filtered_options: Fixa[] = collectOptions(
    options,
    terms,
  ).slice(0, size);

  return filtered_options;
};
