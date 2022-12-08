import { ChangeEvent, FC } from "react";
import { MenuItem, TextField } from "@mui/material";
import { Potential } from "../../assets";
import SelectPotentialOption from "./CustomOption";

type SelectPotentialProps = {
  potential: Potential | null;
  value: string;
  onChange: (value: string) => void;
};
const SelectPotential: FC<SelectPotentialProps> = (props) => {
  let options: { [key: string]: { label: string } } = {};
  if (props.potential !== null) {
    options = props.potential.toDict();
  }

  const disabled = props.potential === null;

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value_input = event.target.value;
    props.onChange(value_input);
  };

  return (
    <TextField
      disabled={disabled}
      value={props.value}
      onChange={handleChange}
      select
      placeholder="Potential"
      size="small"
    >
      {Object.values(options).map(({ label }, index) => (
        <MenuItem key={`item-${index}`} value={label}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectPotential;
