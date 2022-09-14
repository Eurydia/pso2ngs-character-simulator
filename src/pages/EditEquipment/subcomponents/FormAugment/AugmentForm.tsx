import { FC } from "react";
import { Box, Grid, TextField } from "@mui/material";
import FieldAugment from "./subcomponents/FieldAugment";
interface AugmentFormProps {}
const AugmentForm: FC<AugmentFormProps> = () => {
  return (
    <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
      <Grid item xs={1}>
        <FieldAugment />
      </Grid>
      <Grid item xs={1}>
        <FieldAugment />
      </Grid>
      <Grid item xs={1}>
        <FieldAugment />
      </Grid>
      <Grid item xs={1}>
        <FieldAugment />
      </Grid>
      <Grid item xs={1}>
        <FieldAugment />
      </Grid>
    </Grid>
  );
};

export default AugmentForm;
