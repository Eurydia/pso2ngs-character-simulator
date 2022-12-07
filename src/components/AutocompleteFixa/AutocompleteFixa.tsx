import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { Fixa, AssetFixas, GroupEnumFixa } from "../../assets";

import { filterOptions } from "./helper";
import AutocompleteOption from "./AutocompleteOption";

type AutocompleteFixaProps = {
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
      options={options}
      value={props.value}
      onChange={handleChange}
      groupBy={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Fixa" />
      )}
      renderOption={(props, option, _) => (
        <AutocompleteOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteFixa;
