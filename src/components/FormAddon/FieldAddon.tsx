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
  slotLabel: ReactNode;
  slotCheckbox: ReactNode;
  level: number;
  onLevelChange: (value: number) => void;
};
export const FieldAddon: FC<FieldAddonProps> = (props) => {
  const { slotLabel, slotCheckbox, level, onLevelChange } = props;
  return (
    <Box>
      <Grid container columns={3} spacing={1} alignItems="center">
        <Grid item xs>
          <Stack spacing={1} direction="row" alignItems="center">
            {slotCheckbox}
            {slotLabel}
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <FieldLevel
            disabled={false}
            label="Level"
            valueMin={0}
            valueMax={AddonSkill.LEVEL_MAX}
            value={level}
            onChange={onLevelChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
