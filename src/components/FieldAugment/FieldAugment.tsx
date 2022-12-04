import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
} from "@mui/material";
import { AssetAugments, Augment } from "../../assets";
import { filterOptions, renderOption } from "./helper";

interface FieldAugmentProps {
  value: Augment | null;
  onChange: (value: Augment | null) => void;
}
const FieldAugment: FC<FieldAugmentProps> = (props) => {
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
            startAdornment: (
              <InputAdornment position="start">C/</InputAdornment>
            ),
          }}
        />
      )}
      renderOption={renderOption}
      filterOptions={filterOptions}
    />
  );
};

export default FieldAugment;
