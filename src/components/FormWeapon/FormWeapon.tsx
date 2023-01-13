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
import { BarChartRounded } from "@mui/icons-material";

import {
  Augment,
  Fixa,
  GroupEnumFixa,
  StatObject,
  Weapon,
} from "../../assets";
import { DataWeapon } from "../../types";

import { FormBase } from "../FormBase";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteWeapon } from "../AutocompleteWeapon";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { SelectPotential } from "../SelectPotential";
import { StatView } from "../StatView";

type FormWeaponProps = {
  cardTitle: string;
  stat: StatObject;
  formData: DataWeapon;
  onFormDataChange: (
    dispatch: (prev: DataWeapon) => DataWeapon,
  ) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { stat, cardTitle, onFormDataChange, formData } = props;

  const { weapon, weapon_level, potential_level, fixa, augments } =
    formData;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleWeaponChange = (value: Weapon | null) => {
    onFormDataChange((prev) => {
      const next = { ...prev };
      next.weapon = value;
      return next;
    });
  };
  const handleWeaponLevelChange = (value: number) => {
    onFormDataChange((prev) => {
      const next = { ...prev };
      next.weapon_level = value;
      return next;
    });
  };
  const handlePotentialLevelChange = (value: number) => {
    onFormDataChange((prev) => {
      const next = { ...prev };
      next.potential_level = value;
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
      next.augments = Augment.removeConflict(next.augments, index);
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
        cardTitle={cardTitle}
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
          <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
            <Grid item xs={1}>
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
                  label="Enhacement"
                  disabled={weapon === null}
                  valueMin={0}
                  valueMax={
                    weapon === null ? 0 : weapon.enhancement_max
                  }
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
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={1}>
                {augments.map((augment, index) => (
                  <AutocompleteAugment
                    key={`augment-${index}`}
                    disabled={
                      weapon === null ||
                      index >= active_augments.length
                    }
                    value={augment}
                    onChange={(value) => {
                      handleAugmentChange(value, index);
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        }
      />
      <Dialog
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
