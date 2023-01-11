import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { AddonSkill } from "../../assets";
import { FieldLevel } from "../FieldLevel";

type CustomFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};
export const CustomField: FC<CustomFieldProps> = (props) => {
  const { label, value, onChange } = props;
  return (
    <Box>
      <Grid container spacing={1} columns={{ xs: 2, sm: 3 }}>
        <Grid item xs>
          <Typography>{label}</Typography>
        </Grid>
        <Grid item xs sm={2}>
          <FieldLevel
            disabled={false}
            label="Level"
            value={value}
            valueMin={0}
            valueMax={AddonSkill.LEVEL_MAX}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
