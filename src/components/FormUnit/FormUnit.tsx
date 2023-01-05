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
import { SummaryEquipment } from "../../types";
import {
  useAugments,
  useEnhancement,
  useFixa,
  useUnit,
} from "../../hooks";

import { FormBase } from "../FormBase";
import { AutocompleteUnit } from "../AutocompleteUnit";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { getActiveAugmentCount } from "../utility";

import { createStat, createSummary } from "./helper";
import { StatView } from "../StatView";
import { BarChart } from "@mui/icons-material";

const CONTEXT: ActionContext = {};

type FormUnitProps = {
  storageKey: string;
  cardTitle: string;
  onStatChange: (stat: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
  onSync: () => void;
};
export const FormUnit: FC<FormUnitProps> = (props) => {
  const { cardTitle, storageKey, onStatChange, onSummaryChange } =
    props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const [unit, setUnit] = useUnit(storageKey);
  const [fixa, setFixa] = useFixa(storageKey);
  const [level, setLevel] = useEnhancement(storageKey);
  const [augments, setAugments] = useAugments(storageKey);

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
    const active_count: number = getActiveAugmentCount(level);
    return augments.slice(0, active_count);
  }, [level, augments, unit]);

  const stat: StatObject = useMemo(() => {
    return createStat(CONTEXT, unit, level, fixa, active_augments);
  }, [unit, level, fixa, active_augments]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(unit, fixa, active_augments));
  }, [unit, fixa, augments, active_augments]);

  return (
    <Fragment>
      <FormBase
        title={cardTitle}
        slotHeaderAction={
          <Tooltip
            placement="top"
            title={<Typography>Open stat</Typography>}
          >
            <IconButton
              disabled={unit === null}
              onClick={handleDialogOpen}
            >
              <BarChart />
            </IconButton>
          </Tooltip>
        }
        slotPrimary={
          <Stack spacing={1}>
            <AutocompleteUnit value={unit} onChange={setUnit} />
            <FieldLevel
              disabled={unit === null}
              valueMin={0}
              valueMax={60}
              value={level}
              onChange={setLevel}
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
                  onChange={(new_value) =>
                    setAugments(new_value, index)
                  }
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
