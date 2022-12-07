import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { AssetAugments, Augment } from "../../assets";
import { filterOptions } from "./helper";
import AutocompleteOption from "./AutocompleteOption";

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
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Augment" />
      )}
      renderOption={(props, option, _) => (
        <AutocompleteOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteAugment;
