import { FC } from "react";
import { TextField } from "@mui/material";
import { WeaponPotential } from "../../assets";

type SelectPotentialProps = {
  options: WeaponPotential;
  value: string | null;
  onChange: (value: string | null) => void;
};
const SelectPotential: FC<SelectPotentialProps> = (props) => {
  return <TextField select value={props.value} />;
};

export default SelectPotential;
