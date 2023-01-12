import { FC, Fragment, useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Checkbox,
} from "@mui/material";
import {
  BarChartRounded,
  CheckBoxOutlineBlankRounded,
  CheckBoxRounded,
} from "@mui/icons-material";

import { StatObject } from "../../assets";

import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

import { FieldAddon } from "./FieldAddon";
import { CheckboxAddon } from "./CheckboxAddon";

type FormAddonProps = {
  stat: StatObject;
  title: string;

  mainLabel: string;
  subLabels: string[];

  mainLevel: number;
  subLevels: number[];
  subActiveIndexes: number[];

  onMainLevelChange: (next_level: number) => void;
  onSubLevelChange: (next_level: number, skill_index: number) => void;
  onSubActiveIndexChange: (skill_index: number) => void;
};
export const FormAddon: FC<FormAddonProps> = (props) => {
  const {
    title,
    stat,
    mainLabel,
    subLabels,
    mainLevel,
    subLevels,
    subActiveIndexes,
    onMainLevelChange,
    onSubLevelChange,
    onSubActiveIndexChange,
  } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Fragment>
      <FormBase
        cardTitle={title}
        slotCardHeaderAction={
          <Tooltip
            placement="top"
            title={<Typography>Open summary</Typography>}
          >
            <IconButton
              size="large"
              color="primary"
              onClick={handleDialogOpen}
            >
              <BarChartRounded />
            </IconButton>
          </Tooltip>
        }
        slotCardContent={
          <Stack spacing={3}>
            <FieldAddon
              slotLabel={
                <Typography fontWeight="bold">{mainLabel}</Typography>
              }
              slotCheckbox={null}
              level={mainLevel}
              onLevelChange={onMainLevelChange}
            />
            <Stack spacing={1}>
              {subActiveIndexes.map((orderNumber, skill_index) => {
                const sub_level: number = subLevels[skill_index];
                const sub_label: string = subLabels[skill_index];
                const handleLevelChange = (next_level: number) => {
                  onSubLevelChange(next_level, skill_index);
                };
                const handleActiveIndexChange = () => {
                  onSubActiveIndexChange(skill_index);
                };
                return (
                  <FieldAddon
                    key={`${sub_label}-${skill_index}`}
                    slotLabel={<Typography>{sub_label}</Typography>}
                    slotCheckbox={
                      <CheckboxAddon
                        orderNumber={orderNumber}
                        onClick={handleActiveIndexChange}
                      />
                    }
                    level={sub_level}
                    onLevelChange={handleLevelChange}
                  />
                );
              })}
            </Stack>
          </Stack>
        }
      />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`${title} addon summary`}</DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
