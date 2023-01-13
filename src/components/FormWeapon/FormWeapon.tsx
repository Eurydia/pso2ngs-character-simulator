import { Fragment, FC, useState, useMemo } from "react";
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

  onWeaponChange: (next_weapon: Weapon | null) => void;
  onWeaponLevelChange: (next_level: number) => void;
  onPotentialLevelChange: (next_level: number) => void;
  onFixaChange: (next_fixa: Fixa | null) => void;
  onAugmentChange: (
    next_augment: Augment | null,
    index: number,
  ) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const {
    stat,
    cardTitle,
    formData,
    onWeaponChange,
    onWeaponLevelChange,
    onPotentialLevelChange,
    onAugmentChange,
    onFixaChange,
  } = props;

  const { weapon, weapon_level, potential_level, fixa, augments } =
    formData;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const active_augments = useMemo((): (Augment | null)[] => {
    if (weapon === null) {
      return [];
    }
    const count: number = Augment.getAugmentSlot(weapon_level);
    return augments.slice(0, count);
  }, [weapon, augments, weapon_level]);

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
                  onValueChange={onWeaponChange}
                />
                <SelectPotential
                  weapon={weapon}
                  value={potential_level}
                  onValueChange={onPotentialLevelChange}
                />

                <FieldLevel
                  label="Enhacement"
                  disabled={weapon === null}
                  valueMin={0}
                  valueMax={
                    weapon === null ? 0 : weapon.enhancement_max
                  }
                  value={weapon_level}
                  onValueChange={onWeaponLevelChange}
                />
                <AutocompleteFixa
                  mode={GroupEnumFixa.WEAPON}
                  disabled={weapon === null}
                  fixa={fixa}
                  onFixaChange={onFixaChange}
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
