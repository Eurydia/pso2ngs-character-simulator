import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";

interface FieldUnitProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}
const FieldUnit: FC<FieldUnitProps> = (props) => {
  return (
    <Autocomplete
      options={[]}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Unit" />
      )}
    />
  );
};

export default FieldUnit;
