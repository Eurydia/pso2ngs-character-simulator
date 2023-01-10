import { Fragment, FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { BarChartRounded, SyncRounded } from "@mui/icons-material";

import {
  Augment,
  Fixa,
  GroupEnumFixa,
  StatObject,
  Unit,
} from "../../assets";
import { DataUnit } from "../../types";

import { FormBase } from "../FormBase";
import { AutocompleteUnit } from "../AutocompleteUnit";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { StatView } from "../StatView";

type FormUnitProps = {
  cardTitle: string;
  stat: StatObject;
  formData: DataUnit;
  onFormDataChange: (getter: (prev: DataUnit) => DataUnit) => void;
  onSync: () => void;
};
export const FormUnit: FC<FormUnitProps> = (props) => {
  const { stat, cardTitle, formData, onFormDataChange, onSync } =
    props;
  const { unit, unit_level, fixa, augments } = formData;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleUnitChange = (value: Unit | null) => {
    onFormDataChange((prev) => {
      const next = { ...prev };
      next.unit = value;
      return next;
    });
  };
  const handleUnitLevelChange = (value: number) => {
    onFormDataChange((prev) => {
      const next = { ...prev };
      next.unit_level = value;
      return next;
    });
  };
  const handleFixaChange = (value: Fixa | null) => {
    onFormDataChange((prev) => {
      const next = { ...prev };
      next.fixa = value;
      return next;
    });
  };
  const handleAugmentChange = (
    value: Augment | null,
    index: number,
  ) => {
    onFormDataChange((prev) => {
      const next = { ...prev };
      next.augments[index] = value;
      return next;
    });
  };

  let active_augments: (Augment | null)[] = [];
  if (unit !== null) {
    const active_count: number = Augment.getAugmentSlot(unit_level);
    active_augments = augments.slice(0, active_count);
  }

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
        slotCardHeaderAction={
          <Fragment>
            <Tooltip
              placement="top"
              title={<Typography>Sync with me</Typography>}
            >
              <span>
                <IconButton
                  color="primary"
                  size="large"
                  onClick={onSync}
                >
                  <SyncRounded />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip
              placement="top"
              title={<Typography>Open stat</Typography>}
            >
              <span>
                <IconButton
                  color="primary"
                  size="large"
                  disabled={unit === null}
                  onClick={handleDialogOpen}
                >
                  <BarChartRounded />
                </IconButton>
              </span>
            </Tooltip>
          </Fragment>
        }
        slotCardContent={
          <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
            <Grid item xs={1}>
              <Stack spacing={1}>
                <AutocompleteUnit
                  value={unit}
                  onChange={handleUnitChange}
                />
                <FieldLevel
                  disabled={unit === null}
                  valueMin={0}
                  valueMax={60}
                  value={unit_level}
                  onChange={handleUnitLevelChange}
                />
                <AutocompleteFixa
                  disabled={unit === null}
                  value={fixa}
                  onChange={handleFixaChange}
                  mode={GroupEnumFixa.UNIT}
                />
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={1}>
                {augments.map((augment, index) => {
                  const disabled =
                    unit === null || index >= active_augments.length;
                  return (
                    <AutocompleteAugment
                      key={`augment-${index}`}
                      disabled={disabled}
                      value={augment}
                      onChange={(value) => {
                        handleAugmentChange(value, index);
                      }}
                    />
                  );
                })}
              </Stack>
            </Grid>
          </Grid>
        }
      />
      <Dialog
        keepMounted
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`${cardTitle} summary`}</DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
