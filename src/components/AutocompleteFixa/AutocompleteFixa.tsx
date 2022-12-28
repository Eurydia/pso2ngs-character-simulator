import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { Fixa, AssetFixas, GroupEnumFixa } from "../../assets";

import { filterOptions } from "./helper";
import CustomOption from "./CustomOption";

type AutocompleteFixaProps = {
  disabled: boolean;
  mode: GroupEnumFixa;
  value: Fixa | null;
  onChange: (value: Fixa | null) => void;
};
const AutocompleteFixa: FC<AutocompleteFixaProps> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Fixa | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  const options = AssetFixas.filter(
    (option) => option.group === props.mode,
  );

  return (
    <Autocomplete
      disabled={props.disabled}
      options={options}
      value={props.value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} fullWidth placeholder="Fixa" />
      )}
      renderOption={(props, option, _) => (
        <CustomOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteFixa;
