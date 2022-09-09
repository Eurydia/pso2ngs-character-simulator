import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";

interface FieldAugmentProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}
const FieldAugment: FC<FieldAugmentProps> = (props) => {
  return (
    <Autocomplete
      options={[]}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Augment" />
      )}
    />
  );
};

export default FieldAugment;
