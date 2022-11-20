import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
} from "@mui/material";
import { Error } from "@mui/icons-material";
import { AssetAugments, Augment } from "../../assets";
import { filterOptions, renderOption } from "./helper";

const AdornmentError: FC = () => {
  return (
    <InputAdornment position="start">
      <Error color="warning" fontSize="inherit" />
    </InputAdornment>
  );
};

const AdornmentOkay: FC = () => {
  return <InputAdornment position="start">C/</InputAdornment>;
};
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
            startAdornment: props.error ? (
              <AdornmentError />
            ) : (
              <AdornmentOkay />
            ),
          }}
        />
      )}
      renderOption={renderOption}
      filterOptions={filterOptions}
      groupBy={(option) => option.group}
    />
  );
};

export default FieldAugment;
