import { FC, Fragment, useCallback, useMemo, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowDownwardRounded,
  BarChartRounded,
  KeyboardArrowDownRounded,
  KeyboardDoubleArrowDownRounded,
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";

import { CharacterClass, statObject } from "../../assets";

import { FieldNumber } from "../FieldNumber";
import { FormBase } from "../FormBase";
import { SelectClass } from "../SelectClass";
import { StatView } from "../StatView";
import { IconButtonTooltip } from "../IconButtonTooltip";
import { amber, grey, orange } from "@mui/material/colors";

type FormCharacterClassProps = {
  cardTitle: string;
};
export const FormCharacterClass: FC<FormCharacterClassProps> = (
  props,
) => {
  const { cardTitle } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const [classData, setClassData] = useState<{
    main: string;
    sub: string;
  }>({ main: "Hunter", sub: "Fighter" });
  const [mainLevel, setMainLevel] = useState<number>(0);

  const handleMainLabelChange = useCallback(
    (next_label: string): void => {
      setClassData((prev) => {
        const next = { ...prev };
        if (next_label === prev.sub) {
          next.sub = prev.main;
        }
        next.main = next_label;
        return next;
      });
    },
    [classData],
  );

  const handleSubLabelChange = useCallback(
    (next_sub_label: string) => {
      setClassData((prev) => {
        const next = { ...prev };
        if (next_sub_label === prev.main) {
          next.main = prev.sub;
        }
        next.sub = next_sub_label;
        return next;
      });
    },
    [classData],
  );

  const mainClass = useMemo((): CharacterClass | null => {
    const next_class: CharacterClass | null =
      CharacterClass.fromLabel(classData.main);
    if (next_class === null) {
      return null;
    }
    return next_class;
  }, [classData.main]);

  const stat = useMemo(() => {
    if (mainClass === null) {
      return statObject();
    }
    return CharacterClass.getStatObject(mainClass, mainLevel);
  }, [mainClass, mainLevel]);

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
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
                currentClass={classData.main}
                onCurrentClassChange={handleMainLabelChange}
              />
              <FieldNumber
                disabled={false}
                startAdornment={<Typography>Lv.</Typography>}
                valueMin={1}
                valueMax={CharacterClass.LEVEL_MAX}
                value={mainLevel}
                onValueChange={setMainLevel}
              />
            </Stack>
            <Box width={{ xs: 1, sm: 0.5 }}>
              <SelectClass
                startIcon={
                  <LooksTwoRounded htmlColor={grey["500"]} />
                }
                currentClass={classData.sub}
                onCurrentClassChange={handleSubLabelChange}
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
