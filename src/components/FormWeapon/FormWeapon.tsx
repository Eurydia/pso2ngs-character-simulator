import { Fragment, FC, useState, useMemo, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
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
import { IconButtonTooltip } from "../IconButtonTooltip";

type FormWeaponProps = {
  // Static props
  cardTitle: string;

  // Dynamic props
  formData: DataWeapon;
  stat: StatObject;

  onWeaponChange: (next_weapon: Weapon | null) => void;
  onPotentialLevelChange: (next_level: number) => void;
  onEnhancementChange: (next_enhancement: number) => void;
  onFixaChange: (next_fixa: Fixa | null) => void;
  onAugmentChange: (
    next_augment: Augment | null,
    index: number,
  ) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const {
    cardTitle,
    stat,
    formData,
    onWeaponChange,
    onPotentialLevelChange,
    onEnhancementChange,
    onFixaChange,
    onAugmentChange,
  } = props;

  const { weapon, potential_level, enhancement, fixa, augments } =
    formData;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
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
    const count: number = Augment.getAugmentSlot(enhancement);
    return augments.slice(0, count);
  }, [weapon, augments, enhancement]);

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
        slotCardHeaderAction={
          <IconButtonTooltip
            tooltipText="Open summary"
            icon={<BarChartRounded />}
            onClick={handleDialogOpen}
          />
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
                  level={enhancement}
                  levelMax={
                    weapon === null ? 0 : weapon.enhancement_max
                  }
                  onLevelChange={onEnhancementChange}
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
