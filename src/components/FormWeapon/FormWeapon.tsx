import { Fragment, FC, useState, useMemo, useCallback } from "react";
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
  // Dynamic props
  formData: DataWeapon;
  stat: StatObject;

  // Static props
  cardTitle: string;

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

  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

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
                  weapon={weapon}
                  onWeaponChange={onWeaponChange}
                />
                <SelectPotential
                  weapon={weapon}
                  potentialLevel={potential_level}
                  onPotentialLevelChange={onPotentialLevelChange}
                />
                <FieldLevel
                  label="Enhacement"
                  levelMin={0}
                  disabled={weapon === null}
                  level={weapon_level}
                  levelMax={
                    weapon === null ? 0 : weapon.enhancement_max
                  }
                  onLevelChange={onWeaponLevelChange}
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
                {augments.map((augment, augment_index) => {
                  return (
                    <AutocompleteAugment
                      key={`augment-${augment_index}`}
                      disabled={
                        weapon === null ||
                        augment_index >= active_augments.length
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
