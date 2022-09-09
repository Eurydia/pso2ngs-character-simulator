import { FC } from "react";
import { FilterVintage, Hexagon } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Stack,
  InputAdornment,
  TextField,
} from "@mui/material";

interface FieldFixaProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}
const FieldFixa: FC<FieldFixaProps> = (props) => {
  return (
    <Autocomplete
      options={[]}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Preset skill" />
      )}
    />
  );
};

export default FieldFixa;
