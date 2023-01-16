import { Fragment, FC, useState, useCallback, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
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

import { AutocompleteUnit } from "../AutocompleteUnit";
import { FieldNumber } from "../FieldNumber";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";
import { IconButtonTooltip } from "../IconButtonTooltip";

type FormUnitProps = {
  // Dynamic props
  stat: StatObject;
  formData: DataUnit;

  // Static props
  cardTitle: string;

  onUnitChange: (next_unit: Unit | null) => void;
  onEnhancementChange: (next_enhancement: number) => void;
  onFixaChange: (next_fixa: Fixa | null) => void;
  onAugmentChange: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
  onSync: () => void;
};
export const FormUnit: FC<FormUnitProps> = (props) => {
  const {
    stat,
    cardTitle,
    formData,
    onUnitChange,
    onEnhancementChange,
    onFixaChange,
    onAugmentChange,
    onSync,
  } = props;

  const { unit, enhancement, fixa, augments } = formData;

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const active_slots = useMemo((): number => {
    if (unit === null) {
      return 0;
    }
    return Augment.getAugmentSlot(enhancement);
  }, [unit, enhancement]);

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
        slotCardHeaderAction={
          <Fragment>
            <IconButtonTooltip
              tooltipText="Sync with me"
              icon={<SyncRounded />}
              onClick={onSync}
            />
            <IconButtonTooltip
              tooltipText="Open summary"
              icon={<BarChartRounded />}
              onClick={handleDialogOpen}
            />
          </Fragment>
        }
        slotCardContent={
          <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
            <Grid item xs={1}>
              <Stack spacing={1}>
                <AutocompleteUnit
                  unit={unit}
                  onUnitChange={onUnitChange}
                />
                <FieldNumber
                  label="Enhacement"
                  valueMin={0}
                  disabled={unit === null}
                  valueMax={unit === null ? 0 : unit.enhancement_max}
                  value={enhancement}
                  onValueChange={onEnhancementChange}
                />
                <AutocompleteFixa
                  mode={GroupEnumFixa.UNIT}
                  disabled={unit === null}
                  fixa={fixa}
                  onFixaChange={onFixaChange}
                />
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={1}>
                {augments.map((augment, augment_index) => {
                  return (
                    <AutocompleteAugment
                      key={`augment-${augment_index}`}
                      disabled={
                        unit === null || augment_index >= active_slots
                      }
                      augment={augment}
                      onAugmentChange={(next_augment) => {
                        onAugmentChange(next_augment, augment_index);
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
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          <Typography fontWeight="bold" fontSize="x-large">
            {`${cardTitle} summary`}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
