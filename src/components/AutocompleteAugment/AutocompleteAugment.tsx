import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { AssetAugments, Augment } from "../../assets";
import { filterOptions, renderOption } from "./helper";

type AutocompleteAugmentProps = {
  value: Augment | null;
  onChange: (value: Augment | null) => void;
};
const AutocompleteAugment: FC<AutocompleteAugmentProps> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Augment | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  return (
    <Autocomplete
      options={AssetAugments}
      value={props.value}
      onChange={handleChange}
      groupBy={(option) => option.group}
      renderInput={({ InputProps, ...other }) => (
        <TextField
          {...other}
          fullWidth
          label="Augment"
          InputProps={{
            ...InputProps,
            startAdornment: "C/",
          }}
        />
      )}
      renderOption={renderOption}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteAugment;
