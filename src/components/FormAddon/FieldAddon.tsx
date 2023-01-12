import {
  CheckBoxOutlineBlankRounded,
  CheckBoxRounded,
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { AddonSkill } from "../../assets";
import { FieldLevel } from "../FieldLevel";

type FieldAddonProps = {
  bold: boolean;
  label: string;
  slotCheckbox: ReactNode;
  level: number;
  onChange: (value: number) => void;
};
export const FieldAddon: FC<FieldAddonProps> = (props) => {
  const { bold, label, level, slotCheckbox, onChange } = props;
  return (
    <Box>
      <Grid container columns={3} spacing={1} alignItems="center">
        <Grid item xs>
          <Stack spacing={1} direction="row" alignItems="center">
            {slotCheckbox}
            <Typography fontWeight={bold ? "bold" : "normal"}>
              {label}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <FieldLevel
            disabled={false}
            label="Level"
            valueMin={0}
            valueMax={AddonSkill.LEVEL_MAX}
            value={level}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
