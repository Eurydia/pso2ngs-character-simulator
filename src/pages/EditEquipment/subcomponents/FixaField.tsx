import { InputAdornment, TextField } from "@mui/material";
import { FC } from "react";

interface FixaFieldProps {}
const FixaField: FC<FixaFieldProps> = (props) => {
  return (
    <TextField label="Fixa" InputLabelProps={{ shrink: true }} />
  );
};

export default FixaField;
