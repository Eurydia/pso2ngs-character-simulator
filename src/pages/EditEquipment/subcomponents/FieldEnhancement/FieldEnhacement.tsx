import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface EnhancementFieldProps {
  value?: string | null;
  onChange?: (
    value_apparent: string | null,
    value_interpreted: number,
  ) => void;
}
const EnhancementField: FC<EnhancementFieldProps> = (props) => {
  return (
    <TextField
      fullWidth
      label="Enhancement"
      type="number"
      inputMode="numeric"
      inputProps={{ min: 0, max: 50 }}
    />
  );
};

export default EnhancementField;
