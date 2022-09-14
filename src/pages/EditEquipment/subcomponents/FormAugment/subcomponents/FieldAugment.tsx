import {
  Autocomplete,
  ListItem,
  MenuItem,
  TextField,
} from "@mui/material";
import { FC } from "react";
import Augments from "../../../../../assets/augments";

interface FieldAugmentProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}
const FieldAugment: FC<FieldAugmentProps> = (props) => {
  return (
    <Autocomplete
      options={Augments}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Augment" />
      )}
      renderOption={(props, option, state) => (
        <MenuItem {...props}>
          {`${option.name}${option.level}`}
        </MenuItem>
      )}
      groupBy={(option) => option.group}
    />
  );
};

export default FieldAugment;
