import { Fragment, FC, useEffect, useMemo, useState } from "react";
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

import {
  ActionContext,
  Augment,
  GroupEnumFixa,
  StatObject,
} from "../../assets";
import { FormDataUnit, FormDataUnitSetter } from "../../types";

import { FormBase } from "../FormBase";
import { AutocompleteUnit } from "../AutocompleteUnit";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { getActiveAugmentCount } from "../utility";

import { createStat, createSummary } from "./helper";
import { StatView } from "../StatView";
import { BarChart, Sync } from "@mui/icons-material";

const CONTEXT: ActionContext = {};

type FormUnitProps = FormDataUnit &
  FormDataUnitSetter & {
    cardTitle: string;
    onSync: () => void;
  };
export const FormUnit: FC<FormUnitProps> = (props) => {
  const {
    cardTitle,
    onSync,
    unit,
    unit_level,
    fixa,
    augments,
    setUnit,
    setUnitLevel,
    setFixa,
    setAugments,
  } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const active_augments: (Augment | null)[] = useMemo(() => {
    if (unit === null) {
      return [];
    }
    const active_count: number = getActiveAugmentCount(unit_level);
    return augments.slice(0, active_count);
  }, [unit_level, augments, unit]);

  const stat: StatObject = useMemo(() => {
    return createStat(
      CONTEXT,
      unit,
      unit_level,
      fixa,
      active_augments,
    );
  }, [unit, unit_level, fixa, active_augments]);

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
            <AutocompleteUnit value={unit} onChange={setUnit} />
            <FieldLevel
              disabled={unit === null}
              valueMin={0}
              valueMax={60}
              value={unit_level}
              onChange={setUnitLevel}
            />
            <AutocompleteFixa
              disabled={unit === null}
              value={fixa}
              onChange={setFixa}
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
                  onChange={(new_value) => {
                    setAugments(new_value, index);
                  }}
                />
              );
            })}
          </Stack>
        }
      />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`Stat for ${cardTitle}`}</DialogTitle>
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
