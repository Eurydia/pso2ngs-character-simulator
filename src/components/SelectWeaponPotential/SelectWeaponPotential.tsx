import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { filterOptions, renderOption } from "./helper";
import { WeaponPotential } from "../../assets";

interface AutocompleteWeaponPotentialProps {
  options: WeaponPotential;
  value: string | null;
  onChange: (value: string | null) => void;
}
const AutocompleteWeaponPotential: FC<
  AutocompleteWeaponPotentialProps
> = (props) => {
  return <TextField select value={props.value} />;
};

export default AutocompleteWeaponPotential;
