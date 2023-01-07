import { Fragment, FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { BarChart, Sync } from "@mui/icons-material";

import {
  Augment,
  Fixa,
  GroupEnumFixa,
  StatObject,
  Unit,
} from "../../assets";

import { FormBase } from "../FormBase";
import { AutocompleteUnit } from "../AutocompleteUnit";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteAugment } from "../AutocompleteAugment";

import { StatView } from "../StatView";
import { FormDataUnit } from "../../types";

type FormUnitProps = {
  formValue: FormDataUnit;
  onFormValueChange: (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ) => void;
  cardTitle: string;
  stat: StatObject;
  onSync: () => void;
};
export const FormUnit: FC<FormUnitProps> = (props) => {
  const { cardTitle, stat, formValue, onFormValueChange, onSync } =
    props;

  const { unit, unit_level, fixa, augments } = formValue;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleUnitChange = (value: Unit | null) => {
    onFormValueChange((prev) => {
      const next = { ...prev };
      next.unit = value;
      return next;
    });
  };

  const handleUnitLevelChange = (value: number) => {
    onFormValueChange((prev) => {
      const next = { ...prev };
      next.unit_level = value;
      return next;
    });
  };

  const handleFixaChange = (value: Fixa | null) => {
    onFormValueChange((prev) => {
      const next = { ...prev };
      next.fixa = value;
      return next;
    });
  };

  const handleAugmentChange = (
    value: Augment | null,
    index: number,
  ) => {
    onFormValueChange((prev) => {
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
        title={cardTitle}
        slotHeaderAction={
          <Fragment>
            <Tooltip
              placement="top"
              title={<Typography>Sync with me</Typography>}
            >
              <span>
                <IconButton onClick={onSync}>
                  <Sync />
                </IconButton>
              </span>
            </Tooltip>
            <Tooltip
              placement="top"
              title={<Typography>Open stat</Typography>}
            >
              <span>
                <IconButton
                  disabled={unit === null}
                  onClick={handleDialogOpen}
                >
                  <BarChart />
                </IconButton>
              </span>
            </Tooltip>
          </Fragment>
        }
        slotPrimary={
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
        }
        slotSecondary={
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
        <DialogActions disableSpacing>
          <Button onClick={handleDialogClose}>close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
