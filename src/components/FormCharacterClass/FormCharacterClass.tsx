import { FC, Fragment, useCallback, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import {
  BarChartRounded,
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";

import { CharacterClass, StatObject } from "../../assets";

import { FieldNumber } from "../FieldNumber";
import { FormBase } from "../FormBase";
import { SelectClass } from "../SelectClass";
import { StatView } from "../StatView";
import { IconButtonTooltip } from "../IconButtonTooltip";

type FormCharacterClassProps = {
  stat: StatObject;
  mainLevel: number;
  mainClass: string;
  subClass: string;

  onMainLevelChange: (next_level: number) => void;
  onMainClassChange: (next_class: string) => void;
  onSubClassChange: (next_class: string) => void;
};
export const FormCharacterClass: FC<FormCharacterClassProps> = (
  props,
) => {
  const {
    stat,
    mainLevel,
    mainClass,
    subClass,
    onMainLevelChange,
    onMainClassChange,
    onSubClassChange,
  } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = useCallback((): void => {
    setDialogOpen(false);
  }, []);
  const handleDialogOpen = useCallback((): void => {
    setDialogOpen(true);
  }, []);

  return (
    <Fragment>
      <FormBase
        cardTitle="Main class & sub class"
        slotCardHeaderAvatar={null}
        slotCardHeaderAction={
          <IconButtonTooltip
            tooltipText="Open summary"
            icon={<BarChartRounded />}
            onClick={handleDialogOpen}
          />
        }
        slotCardContent={
          <Stack spacing={3}>
            <Stack
              spacing={1}
              direction={{ xs: "column", sm: "row" }}
            >
              <SelectClass
                startIcon={
                  <LooksOneRounded htmlColor={orange["400"]} />
                }
                currentClass={mainClass}
                onCurrentClassChange={onMainClassChange}
              />
              <FieldNumber
                disabled={false}
                startAdornment={<Typography>Lv.</Typography>}
                valueMin={1}
                valueMax={CharacterClass.LEVEL_MAX}
                value={mainLevel}
                onValueChange={onMainLevelChange}
              />
            </Stack>
            <Box width={{ xs: 1, sm: 0.5 }}>
              <SelectClass
                startIcon={
                  <LooksTwoRounded htmlColor={grey["400"]} />
                }
                currentClass={subClass}
                onCurrentClassChange={onSubClassChange}
              />
            </Box>
          </Stack>
        }
      />
      <Dialog
        fullWidth
        keepMounted
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          <Typography fontWeight="bold" fontSize="x-large">
            Class summary
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
