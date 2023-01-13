import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC, memo, ReactNode } from "react";
import { AddonSkill } from "../../assets";
import { FieldLevel } from "../FieldLevel";

type FieldAddonProps = {
  slotCheckbox: ReactNode;
  level: number;

  bold: boolean;
  title: string;

  onLevelChange: (value: number) => void;
};
export const FieldAddon: FC<FieldAddonProps> = (props) => {
  const { title, bold, slotCheckbox, level, onLevelChange } = props;
  return (
    <Box>
      <Grid container columns={3} spacing={1} alignItems="center">
        <Grid item xs>
          <Stack spacing={1} direction="row" alignItems="center">
            {slotCheckbox}
            <Typography fontWeight={bold ? "bold" : "normal"}>
              {title}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <FieldLevel
            disabled={false}
            label="Level"
            levelMin={0}
            levelMax={AddonSkill.LEVEL_MAX}
            level={level}
            onLevelChange={onLevelChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
