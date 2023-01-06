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
  Fixa,
  GroupEnumFixa,
  StatObject,
  Weapon,
} from "../../assets";

import { FormBase } from "../FormBase";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteWeapon } from "../AutocompleteWeapon";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { SelectPotential } from "../SelectPotential";
import { StatView } from "../StatView";

const CONTEXT: ActionContext = {};

type FormWeaponProps = {
  stat: StatObject;
  cardTitle: string;

  weapon: Weapon | null;
  weaponLevel: number;
  potentialLevel: number;
  fixa: Fixa | null;
  augments: (Augment | null)[];

  onWeaponChange: (new_value: Weapon | null) => void;
  onWeaponLevelChange: (new_value: number) => void;
  onPotentialLevelChange: (new_value: number) => void;
  onFixaChange: (new_value: Fixa | null) => void;
  onAugmentChange: (new_value: Augment | null, index: number) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const {
    cardTitle,
    stat,

    weapon,
    weaponLevel,
    potentialLevel,
    fixa,
    augments,

    onWeaponChange,
    onWeaponLevelChange,
    onPotentialLevelChange,
    onFixaChange,
    onAugmentChange,
  } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  let active_augments: (Augment | null)[] = [];
  if (weapon !== null) {
    const active_count: number = Augment.getAugmentSlot(weaponLevel);
    active_augments = augments.slice(0, active_count);
  }

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
            <AutocompleteWeapon
              value={weapon}
              onChange={onWeaponChange}
            />
            <SelectPotential
              weapon={weapon}
              value={potentialLevel}
              onChange={onPotentialLevelChange}
            />

            <FieldLevel
              disabled={weapon === null}
              valueMin={0}
              valueMax={60}
              value={weaponLevel}
              onChange={onWeaponLevelChange}
            />
            <AutocompleteFixa
              disabled={weapon === null}
              value={fixa}
              onChange={onFixaChange}
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
                onChange={(new_value) => {
                  onAugmentChange(new_value, index);
                }}
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
