import { FC, memo, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { Fixa, AssetFixas, GroupEnumFixa } from "../../assets";

import { filterOptions } from "./helper";
import CustomOption from "./CustomOption";

type AutocompleteFixaProps = {
  mode: GroupEnumFixa;
  disabled: boolean;
  value: Fixa | null;
  onChange: (value: Fixa | null) => void;
};
const AutocompleteFixa: FC<AutocompleteFixaProps> = memo(
  (props) => {
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
  },
  (prev, next) => {
    return (
      prev.disabled === next.disabled &&
      prev.value?.label === next.value?.label
    );
  },
);

export default AutocompleteFixa;
