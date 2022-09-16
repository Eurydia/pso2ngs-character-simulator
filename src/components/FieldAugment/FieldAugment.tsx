import { FC, HTMLAttributes } from "react";
import {
  Autocomplete,
  AutocompleteRenderOptionState,
  FilterOptionsState,
  InputAdornment,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import romans, { deromanize, romanize } from "romans";
import { AssetAugments, Augment } from "../../assets";

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Augment,
  _: AutocompleteRenderOptionState,
) => {
  const label = getOptionLabel(option);

  return (
    <MenuItem {...props}>
      <ListItemText>{label}</ListItemText>
    </MenuItem>
  );
};
const filterOptions = (
  options: Augment[],
  state: FilterOptionsState<Augment>,
) => {
  const value = state.inputValue;

  const terms = value
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);

  return terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: [
            (item) => item.name,
            (item) => item.level.toString(),
            (item) => item.group,
          ],
        }),
      options,
    )
    .slice(0, 16)
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
const getOptionLabel = (option: Augment) => {
  const level = option.level > 0 ? option.level.toString() : "";
  return `${option.name} ${level}`.trimEnd();
};

interface FieldAugmentProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}
const FieldAugment: FC<FieldAugmentProps> = (props) => {
  return (
    <Autocomplete
      options={AssetAugments}
      renderInput={({ InputProps, ...other }) => (
        <TextField
          {...other}
          fullWidth
          label="Augment"
          InputProps={{
            ...InputProps,
            startAdornment: (
              <InputAdornment position="start">C/</InputAdornment>
            ),
          }}
        />
      )}
      filterOptions={filterOptions}
      renderOption={renderOption}
      getOptionLabel={getOptionLabel}
      groupBy={(option) => option.group}
    />
  );
};

export default FieldAugment;
