import { FC, SyntheticEvent } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
  TextField,
} from "@mui/material";

import { Potential } from "../../assets";

import CustomOption from "./CustomOption";

type SelectPotentialProps = {
  potential: Potential | null;
  value: string;
  onChange: (value: string) => void;
};
const SelectPotential: FC<SelectPotentialProps> = (props) => {
  let options: string[] = [];

  if (props.potential !== null) {
    options = Object.keys(props.potential.potentials);
  }

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
  ) => {
    if (value === null) {
      props.onChange("");
      return;
    }

    props.onChange(value);
  };

  return (
    <Autocomplete
      value={props.value}
      options={options}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} fullWidth placeholder="Potential" />
      )}
      renderOption={(props, option, _) => (
        <CustomOption {...props} option={option} />
      )}
    />
  );
};

export default SelectPotential;
