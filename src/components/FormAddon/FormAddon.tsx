import { FC, Fragment, useCallback, useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import { StatObject } from "../../assets";

import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

import { FieldAddon } from "./FieldAddon";
import { CheckboxAddon } from "./CheckboxAddon";

type FormAddonProps = {
  // dynamic props
  stat: StatObject;
  mainLevel: number;
  subLevels: number[];
  subActiveIndexes: number[];

  // static props
  title: string;
  mainLabel: string;
  subLabels: string[];

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

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

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
              bold
              title={mainLabel}
              slotCheckbox={null}
              level={mainLevel}
              onLevelChange={onMainLevelChange}
            />
            <Stack spacing={1}>
              {subActiveIndexes.map((order_number, skill_index) => {
                const sub_level: number = subLevels[skill_index];
                const sub_label: string = subLabels[skill_index];
                return (
                  <FieldAddon
                    key={`${sub_label}-${skill_index}`}
                    bold={false}
                    title={sub_label}
                    slotCheckbox={
                      <CheckboxAddon
                        orderNumber={order_number}
                        onClick={() => {
                          onSubActiveIndexChange(skill_index);
                        }}
                      />
                    }
                    level={sub_level}
                    onLevelChange={(next_level: number) => {
                      onSubLevelChange(next_level, skill_index);
                    }}
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
