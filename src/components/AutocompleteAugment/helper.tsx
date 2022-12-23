import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { Augment } from "../../assets";

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

const termReducer = (options: Augment[], term: string): Augment[] => {
  return matchSorter(options, term, {
    keys: [
      (item) => item.name,
      (item) => item.group,
      (item) => item.level,
      (item) => item.level_roman,
    ],
  });
};

const sieveOptions = (
  options: Augment[],
  terms: string[],
): Augment[] => {
  const fitlered_options: Augment[] = terms.reduceRight(
    termReducer,
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
  const terms: string[] = extractTerms(value);
  const filtered_options: Augment[] = sieveOptions(
    options,
    terms,
  ).slice(0, size);
  return filtered_options;
};
