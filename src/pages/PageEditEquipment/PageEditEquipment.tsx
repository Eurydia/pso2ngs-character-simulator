import {
  FC,
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import { ActionContext, StatObject } from "../../assets";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { DataUnit, DataWeapon } from "../../types";
import { useFormUnit, useFormWeapon } from "../../hooks";

type PageEditEquipmentProps = {
  storageKey: string;
  isVisible: boolean;
  context: ActionContext;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditEquipment: FC<PageEditEquipmentProps> = (
  props,
) => {
  const { context, storageKey, onStatChange, isVisible } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const {
    formData: formWeapon,
    setWeapon,
    setWeaponLevel,
    setPotentialLevel,
    setAugment: setWeaponAugment,
    setFixa: setWeaponFixa,
  } = useFormWeapon(`${storageKey}-form-weapon`);

  const {
    formData: formUnitA,
    setUnit: setUnitA,
    setUnitLevel: setUnitLevelA,
    setAugment: setAugmentA,
    setFixa: setFixaA,
  } = useFormUnit(`${storageKey}-form-unit-a`);

  const {
    formData: formUnitB,
    setUnit: setUnitB,
    setUnitLevel: setUnitLevelB,
    setAugment: setAugmentB,
    setFixa: setFixaB,
  } = useFormUnit(`${storageKey}-form-unit-b`);

  const {
    formData: formUnitC,
    setUnit: setUnitC,
    setUnitLevel: setUnitLevelC,
    setAugment: setAugmentC,
    setFixa: setFixaC,
  } = useFormUnit(`${storageKey}-form-unit-c`);

  const handleDialogOpen = useCallback((): void => {
    setDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback((): void => {
    setDialogOpen(false);
  }, []);

  const handleUnitSyncA = useCallback((): void => {
    setUnitB(formUnitA.unit);
    setUnitLevelB(formUnitA.unit_level);
    setFixaB(formUnitA.fixa);

    setUnitC(formUnitA.unit);
    setUnitLevelC(formUnitA.unit_level);
    setFixaC(formUnitA.fixa);

    formUnitA.augments.forEach((next_augment, augment_index) => {
      setAugmentB(next_augment, augment_index);
      setAugmentC(next_augment, augment_index);
    });
  }, []);

  const handleUnitSyncB = useCallback((): void => {
    setUnitA(formUnitB.unit);
    setUnitLevelA(formUnitB.unit_level);
    setFixaA(formUnitB.fixa);

    setUnitC(formUnitB.unit);
    setUnitLevelC(formUnitB.unit_level);
    setFixaC(formUnitB.fixa);

    formUnitB.augments.forEach((next_augment, augment_index) => {
      setAugmentA(next_augment, augment_index);
      setAugmentC(next_augment, augment_index);
    });
  }, []);

  const handleUnitSyncC = useCallback((): void => {
    setUnitA(formUnitC.unit);
    setUnitLevelA(formUnitC.unit_level);
    setFixaA(formUnitC.fixa);

    setUnitB(formUnitC.unit);
    setUnitLevelB(formUnitC.unit_level);
    setFixaB(formUnitC.fixa);

    formUnitC.augments.forEach((next_augment, augment_index) => {
      setAugmentA(next_augment, augment_index);
      setAugmentB(next_augment, augment_index);
    });
  }, []);

  const stat_weapon = useMemo((): StatObject => {
    return DataWeapon.getStatObject(context, formWeapon);
  }, [context, formWeapon]);
  const stat_unit_a = useMemo((): StatObject => {
    return DataUnit.getStatObject(context, formUnitA);
  }, [context, formUnitA]);
  const stat_unit_b = useMemo((): StatObject => {
    return DataUnit.getStatObject(context, formUnitB);
  }, [context, formUnitB]);
  const stat_unit_c = useMemo((): StatObject => {
    return DataUnit.getStatObject(context, formUnitC);
  }, [context, formUnitC]);

  const stat_total = useMemo((): StatObject => {
    let stat = StatObject.merge(stat_weapon, stat_unit_a);
    stat = StatObject.merge(stat, stat_unit_b);
    return StatObject.merge(stat, stat_unit_c);
  }, [stat_weapon, stat_unit_a, stat_unit_b, stat_unit_c]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <Fragment>
      <Container
        maxWidth="md"
        sx={{
          display: isVisible ? "block" : "none",
        }}
      >
        <Tooltip
          placement="top"
          title={<Typography>Open summary</Typography>}
        >
          <Fab
            onClick={handleDialogOpen}
            sx={{
              position: "fixed",
              bottom: "24px",
              right: "24px",
            }}
          >
            <BarChartRounded />
          </Fab>
        </Tooltip>
        <Box marginY={4}>
          <Stack spacing={2}>
            <FormWeapon
              cardTitle="Weapon"
              stat={stat_weapon}
              formData={formWeapon}
              onWeaponChange={setWeapon}
              onPotentialLevelChange={setPotentialLevel}
              onWeaponLevelChange={setWeaponLevel}
              onFixaChange={setWeaponFixa}
              onAugmentChange={setWeaponAugment}
            />
            <FormUnit
              cardTitle="Unit A"
              stat={stat_unit_a}
              formData={formUnitA}
              onUnitChange={setUnitA}
              onUnitLevelChange={setUnitLevelA}
              onFixaChange={setFixaA}
              onAugmentChange={setAugmentA}
              onSync={handleUnitSyncA}
            />
            <FormUnit
              cardTitle="Unit B"
              stat={stat_unit_b}
              formData={formUnitB}
              onUnitChange={setUnitB}
              onUnitLevelChange={setUnitLevelB}
              onFixaChange={setFixaB}
              onAugmentChange={setAugmentB}
              onSync={handleUnitSyncB}
            />
            <FormUnit
              cardTitle="Unit C"
              stat={stat_unit_c}
              formData={formUnitC}
              onUnitChange={setUnitC}
              onUnitLevelChange={setUnitLevelC}
              onFixaChange={setFixaC}
              onAugmentChange={setAugmentC}
              onSync={handleUnitSyncC}
            />
          </Stack>
        </Box>
      </Container>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle fontSize="x-large" fontWeight="bold">
          Equipment summary
        </DialogTitle>
        <DialogContent>
          <StatView stat={stat_total} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
