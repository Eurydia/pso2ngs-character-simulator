import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface EnhancementFieldProps {
  value: string;
  onChange: (
    value_apparent: string,
    value_interpreted: number,
  ) => void;
}
const EnhancementField: FC<EnhancementFieldProps> = (props) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    const value_int = parseInt(value);
    props.onChange(value, value_int);
  };

  return (
    <TextField
      fullWidth
      value={props.value}
      onChange={handleChange}
      label="Enhancement"
      type="number"
      inputMode="numeric"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">+</InputAdornment>
        ),
      }}
      inputProps={{ min: 0, max: 50 }}
    />
  );
};

export default EnhancementField;
