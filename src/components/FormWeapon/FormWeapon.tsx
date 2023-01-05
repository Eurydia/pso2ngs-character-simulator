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
import { BarChart } from "@mui/icons-material";

import {
  ActionContext,
  Augment,
  GroupEnumFixa,
  StatObject,
} from "../../assets";
import {
  useAugments,
  useEnhancement,
  useFixa,
  useWeapon,
} from "../../hooks";
import { SummaryEquipment } from "../../types";

import { FormBase } from "../FormBase";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteWeapon } from "../AutocompleteWeapon";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { SelectPotential } from "../SelectPotential";

import { createStat, createSummary } from "./helper";
import { getActiveAugmentCount } from "../utility";
import { StatView } from "../StatView";

const CONTEXT: ActionContext = {};

type FormWeaponProps = {
  storageKey: string;
  cardTitle: string;
  onStatChange: (stats: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { storageKey, onStatChange, onSummaryChange, cardTitle } =
    props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const [weapon, potentialLevel, setWeapon, setPotentialLevel] =
    useWeapon(storageKey);
  const [fixa, setFixa] = useFixa(storageKey);
  const [weapon_level, setLevel] = useEnhancement(storageKey);
  const [augments, setAugments] = useAugments(storageKey);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const active_augments: (Augment | null)[] = useMemo(() => {
    if (weapon === null) {
      return [];
    }
    const active_count: number = getActiveAugmentCount(weapon_level);
    return augments.slice(0, active_count);
  }, [weapon_level, augments, weapon]);

  const stat = useMemo((): StatObject => {
    return createStat(
      CONTEXT,
      weapon,
      weapon_level,
      potentialLevel,
      fixa,
      active_augments,
    );
  }, [weapon, weapon_level, fixa, potentialLevel, active_augments]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(weapon, fixa, active_augments));
  }, [weapon, fixa, augments, active_augments]);

  return (
    <Fragment>
      <FormBase
        title={cardTitle}
        slotHeaderAction={
          <Tooltip
            placement="top"
            title={<Typography>Open stat</Typography>}
          >
            <span>
              <IconButton
                onClick={handleDialogOpen}
                disabled={weapon === null}
              >
                <BarChart />
              </IconButton>
            </span>
          </Tooltip>
        }
        slotPrimary={
          <Stack spacing={1}>
            <AutocompleteWeapon value={weapon} onChange={setWeapon} />
            <SelectPotential
              weapon={weapon}
              value={potentialLevel}
              onChange={setPotentialLevel}
            />

            <FieldLevel
              disabled={weapon === null}
              valueMin={0}
              valueMax={60}
              value={weapon_level}
              onChange={setLevel}
            />
            <AutocompleteFixa
              disabled={weapon === null}
              value={fixa}
              onChange={setFixa}
              mode={GroupEnumFixa.WEAPON}
            />
          </Stack>
        }
        slotSecondary={
          <Stack spacing={1}>
            {augments.map((aug, index) => (
              <AutocompleteAugment
                key={`augment-${index}`}
                disabled={
                  weapon === null || index >= active_augments.length
                }
                value={aug}
                onChange={(new_value) =>
                  setAugments(new_value, index)
                }
              />
            ))}
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
