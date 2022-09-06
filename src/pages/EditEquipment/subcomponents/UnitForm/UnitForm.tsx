import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import AugmentForm from "../AugmentForm";

interface UnitFormProps {}
const UnitForm: FC<UnitFormProps> = () => {
  return (
    <Stack spacing={0.5}>
      <TextField fullWidth label="Unit" helperText=" " />
      <TextField
        fullWidth
        label="Enhancement"
        helperText=" "
        // <Typography fontSize="inherit">Invalid</Typography>
      />
      <TextField
        fullWidth
        label="Fixa"
        helperText={
          <Typography fontSize="inherit">Optional</Typography>
        }
      />
      <AugmentForm />
    </Stack>
  );
};

export default UnitForm;
