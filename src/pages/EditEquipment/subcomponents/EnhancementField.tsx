import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface EnhancementFieldProps {
  value: string;
  onChange: (value: string) => void;
}
const EnhancementField: FC<EnhancementFieldProps> = (props) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    props.onChange(value);
  };

  return (
    <TextField
      fullWidth
      value={props.value}
      onChange={handleChange}
      variant="filled"
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
