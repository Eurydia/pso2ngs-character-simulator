import { InputAdornment, TextField } from "@mui/material";
import { FC } from "react";

interface EnhancementFieldProps {
  value: string | null;
  onChange: (value: string | null) => void;
}
const EnhancementField: FC<EnhancementFieldProps> = (props) => {
  return <TextField label="Fixa" />;
};

export default EnhancementField;
