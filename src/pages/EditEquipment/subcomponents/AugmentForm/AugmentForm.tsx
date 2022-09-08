import { Box, Grid, TextField } from "@mui/material";
import { FC } from "react";

interface AugmentFormProps {}
const AugmentForm: FC<AugmentFormProps> = () => {
  return (
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
  );
};

export default AugmentForm;
