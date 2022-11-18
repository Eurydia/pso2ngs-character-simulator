import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
} from "@mui/material";
import { Error, Warning } from "@mui/icons-material";
import { AssetAugments, Augment } from "../../assets";
import { filterOptions, renderOption } from "./helper";

const RESULT_SIZE = 16;

interface FieldAugmentProps {
  error: boolean;
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
      renderInput={({ InputProps, ...other }) => (
        <TextField
          {...other}
          error={props.error}
          fullWidth
          label="Augment"
          InputProps={{
            ...InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {props.error ? (
                  <Error color="warning" fontSize="inherit" />
                ) : (
                  "C/"
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={renderOption}
      filterOptions={(options, state) =>
        filterOptions(options, state, RESULT_SIZE)
      }
      groupBy={(option) => option.group}
    />
  );
};

export default FieldAugment;
