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

interface WeaponFormProps {}
const WeaponForm: FC<WeaponFormProps> = () => {
  return (
    <Stack spacing={0.5}>
      <TextField fullWidth label="Weapon" helperText=" " />
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

export default WeaponForm;
