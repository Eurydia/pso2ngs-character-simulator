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

import { CharacterClass } from "../../assets";

import { FieldNumber } from "../FieldNumber";
import { FormBase } from "../FormBase";
import { SelectClass } from "../SelectClass";
import { StatView } from "../StatView";
import { IconButtonTooltip } from "../IconButtonTooltip";

type FormCharacterClassProps = {
  mainLevel: number;
  mainClass: string;
  subClass: string;

  cardTitle: string;
  formStorageKey: string;

  onMainLevelChange: (next_level: number) => void;
  onMainClassChange: (next_class: string) => void;
  onSubClassChange: (next_class: string) => void;
};
export const FormCharacterClass: FC<FormCharacterClassProps> = (
  props,
) => {
  const {
    cardTitle,
    formStorageKey,
    mainLevel,
    mainClass,
    subClass,
    onMainLevelChange,
    onMainClassChange,
    onSubClassChange,
  } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  // const [mainLevel, setMainLevel] = useState(0);
  // const [classData, setClassData] = useState((): [string, string] => {
  //   return loadCharacterClass(formStorageKey);
  // });
  // useEffect(() => {
  //   saveCharacterClass(formStorageKey, classData);
  // }, [classData]);
  // const handleMainLabelChange = useCallback(
  //   (next_label: string): void => {
  //     setClassData((prev) => {
  //       const next: [string, string] = [...prev];
  //       if (next_label === prev[0]) {
  //         next[1] = prev[0];
  //       }
  //       next[0] = next_label;
  //       return next;
  //     });
  //   },
  //   [],
  // );
  // const handleSubLabelChange = useCallback(
  //   (next_label: string) => {
  //     setClassData((prev) => {
  //       const next: [string, string] = [...prev];
  //       if (next_label === prev[1]) {
  //         next[0] = prev[1];
  //       }
  //       next[1] = next_label;
  //       return next;
  //     });
  //   },
  //   [classData],
  // );

  // const mainClass = useMemo((): CharacterClass | null => {
  //   const next_class: CharacterClass | null =
  //     CharacterClass.fromLabel(classData[0]);
  //   if (next_class === null) {
  //     return null;
  //   }
  //   return next_class;
  // }, [classData[0]]);

  // const stat = useMemo(() => {
  //   if (mainClass === null) {
  //     return statObject();
  //   }
  //   return CharacterClass.getStatObject(mainClass, mainLevel);
  // }, [mainClass, mainLevel]);

  // useEffect(() => {
  //   onStatChange(stat);
  // }, [stat]);

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
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
          {/* <StatView stat={stat} maxHeight="" /> */}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
