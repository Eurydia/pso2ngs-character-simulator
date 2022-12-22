import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Augment } from "../../assets";

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

const reducer = (options: Augment[], term: string): Augment[] => {
  return matchSorter(options, term, {
    keys: [
      (item) => item.#name,
      (item) => item.group,
      (item) => item.#level.toString(),
      (item) => item.level_roman,
    ],
  });
};

const collectOptions = (
  options: Augment[],
  terms: string[],
): Augment[] => {
  const fitlered_options: Augment[] = terms.reduceRight(
    reducer,
    options,
  );
  return fitlered_options;
};

export const filterOptions = (
  options: Augment[],
  state: FilterOptionsState<Augment>,
  size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = collectTerms(value);
  const filtered_options: Augment[] = collectOptions(
    options,
    terms,
  ).slice(0, size);
  return filtered_options;
};
