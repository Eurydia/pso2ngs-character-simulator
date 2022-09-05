import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface WeaponFormProps {}
const WeaponForm: FC<WeaponFormProps> = () => {
  return (
    <Stack spacing={0.5}>
      <TextField fullWidth label="Weapon" helperText=" " />
      <TextField
        fullWidth
        label="Enhancement"
        helperText={
          <Typography fontSize="inherit">Invalid</Typography>
        }
      />
      <TextField
        fullWidth
        label="Fixa"
        helperText={
          <Typography fontSize="inherit">Optional</Typography>
        }
      />
      <Box>
        <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
          <Grid item xs={1}>
            <TextField fullWidth label="Augment" />
          </Grid>
          <Grid item xs={1}>
            <TextField fullWidth label="Augment" />
          </Grid>
          <Grid item xs={1}>
            <TextField fullWidth label="Augment" />
          </Grid>
          <Grid item xs={1}>
            <TextField fullWidth label="Augment" />
          </Grid>
          <Grid item xs={1}>
            <TextField fullWidth label="Augment" />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default WeaponForm;
