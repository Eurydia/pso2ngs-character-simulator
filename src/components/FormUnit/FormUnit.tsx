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
import { BarChart, Sync } from "@mui/icons-material";

const CONTEXT: ActionContext = {};

type FormUnitProps = {
  cardTitle: string;
  stat: StatObject;

  unit: Unit | null;
  unitLevel: number;
  fixa: Fixa | null;
  augments: (Augment | null)[];

  onSync: () => void;
  onUnitChange: (new_value: Unit | null) => void;
  onUnitLevelChange: (new_value: number) => void;
  onFixaChange: (new_value: Fixa | null) => void;
  onAugmentChange: (new_value: Augment | null, index: number) => void;
};
export const FormUnit: FC<FormUnitProps> = (props) => {
  const {
    cardTitle,
    stat,
    unit,
    unitLevel,
    fixa,
    augments,

    onSync,
    onUnitChange,
    onUnitLevelChange,
    onFixaChange,
    onAugmentChange,
  } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  let active_augments: (Augment | null)[] = [];
  if (unit !== null) {
    const active_count: number = Augment.getAugmentSlot(unitLevel);
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
            <AutocompleteUnit value={unit} onChange={onUnitChange} />
            <FieldLevel
              disabled={unit === null}
              valueMin={0}
              valueMax={60}
              value={unitLevel}
              onChange={onUnitLevelChange}
            />
            <AutocompleteFixa
              disabled={unit === null}
              value={fixa}
              onChange={onFixaChange}
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
                    onAugmentChange(new_value, index);
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
