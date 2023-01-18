import { FC, Fragment, memo, useCallback, useState } from "react";
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

import { CharClass, StatObject } from "../../assets";

import { FieldNumber } from "../FieldNumber";
import { FormBase } from "../FormBase";
import { SelectCharClass } from "../SelectCharClass";
import { StatView } from "../StatView";
import { IconButtonTooltip } from "../IconButtonTooltip";

type FormCharClassProps = {
  stat: StatObject;
  charLevel: number;
  mainClass: string;
  subClass: string;

  onCharLevelChange: (next_level: number) => void;
  onMainClassChange: (next_class: string) => void;
  onSubClassChange: (next_class: string) => void;
};
export const FormCharClass: FC<FormCharClassProps> = memo(
  (props) => {
    const {
      stat,
      charLevel,
      mainClass,
      subClass,
      onCharLevelChange,
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
                <SelectCharClass
                  startIcon={
                    <LooksOneRounded htmlColor={orange["400"]} />
                  }
                  charClass={mainClass}
                  onCharClassChange={onMainClassChange}
                />
                <FieldNumber
                  disabled={false}
                  startAdornment={<Typography>Lv.</Typography>}
                  valueMin={1}
                  valueMax={CharClass.LEVEL_MAX}
                  value={charLevel}
                  onValueChange={onCharLevelChange}
                />
              </Stack>
              <Box width={{ xs: 1, sm: 0.5 }}>
                <SelectCharClass
                  startIcon={
                    <LooksTwoRounded htmlColor={grey["400"]} />
                  }
                  charClass={subClass}
                  onCharClassChange={onSubClassChange}
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
  },
  (prev, next) => {
    return (
      prev.charLevel === next.charLevel &&
      prev.mainClass === next.mainClass &&
      prev.subClass === next.subClass
    );
  },
);
