import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { filterOptions, renderOption } from "./helper";
import { Fixa, AssetFixas, GroupEnumFixa } from "../../assets";

interface AutocompleteFixaProps {
  mode: GroupEnumFixa;
  value: Fixa | null;
  onChange: (value: Fixa | null) => void;
}
const AutocompleteFixa: FC<AutocompleteFixaProps> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Fixa | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  return (
    <Autocomplete
      options={AssetFixas.filter(
        (option) => option.group === props.mode,
      )}
      value={props.value}
      onChange={handleChange}
      groupBy={(option) => option.group}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Fixa" />
      )}
      renderOption={renderOption}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteFixa;
