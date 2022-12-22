import { FilterOptionsState } from "@mui/material";
import { matchSorter } from "match-sorter";

import { AugmentInterface } from "../../assets";

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

const reducer = (
  options: AugmentInterface[],
  term: string,
): AugmentInterface[] => {
  return matchSorter(options, term, {
    keys: [
      (item) => item.name,
      (item) => item.group,
      (item) => item.level,
      (item) => item.level_roman,
    ],
  });
};

const collectOptions = (
  options: AugmentInterface[],
  terms: string[],
): AugmentInterface[] => {
  const fitlered_options: AugmentInterface[] = terms.reduceRight(
    reducer,
    options,
  );
  return fitlered_options;
};

export const filterOptions = (
  options: AugmentInterface[],
  state: FilterOptionsState<AugmentInterface>,
  size: number = 16,
) => {
  const value: string = state.inputValue;
  const terms: string[] = collectTerms(value);
  const filtered_options: AugmentInterface[] = collectOptions(
    options,
    terms,
  ).slice(0, size);
  return filtered_options;
};
