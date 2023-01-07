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
import { BarChart } from "@mui/icons-material";

import {
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
import { FormDataWeapon } from "../../types";

type FormWeaponProps = {
  stat: StatObject;
  cardTitle: string;

  formValue: FormDataWeapon;
  onFormValueChange: (
    value:
      | FormDataWeapon
      | ((prev: FormDataWeapon) => FormDataWeapon),
  ) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const {
    cardTitle,
    stat,

    formValue,
    onFormValueChange,
  } = props;

  const { weapon, weapon_level, potential_level, fixa, augments } =
    formValue;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleWeaponChange = (value: Weapon | null) => {
    onFormValueChange((prev) => {
      const next = { ...prev };
      next.weapon = value;
      return next;
    });
  };

  const handleWeaponLevelChange = (value: number) => {
    onFormValueChange((prev) => {
      const next = { ...prev };
      next.weapon_level = value;
      return next;
    });
  };

  const handlePotentialLevelChange = (value: number) => {
    onFormValueChange((prev) => {
      const next = { ...prev };
      next.potential_level = value;
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
  if (weapon !== null) {
    const active_count: number = Augment.getAugmentSlot(weapon_level);
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
              onChange={handleWeaponChange}
            />
            <SelectPotential
              weapon={weapon}
              value={potential_level}
              onChange={handlePotentialLevelChange}
            />

            <FieldLevel
              disabled={weapon === null}
              valueMin={0}
              valueMax={60}
              value={weapon_level}
              onChange={handleWeaponLevelChange}
            />
            <AutocompleteFixa
              disabled={weapon === null}
              value={fixa}
              onChange={handleFixaChange}
              mode={GroupEnumFixa.WEAPON}
            />
          </Stack>
        }
        slotSecondary={
          <Stack spacing={1}>
            {augments.map((augment, index) => (
              <AutocompleteAugment
                key={`augment-${index}`}
                disabled={
                  weapon === null || index >= active_augments.length
                }
                value={augment}
                onChange={(value) => {
                  handleAugmentChange(value, index);
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
