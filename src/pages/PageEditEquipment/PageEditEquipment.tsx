import {
  FC,
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
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

import { ActionContext, Augment, StatObject } from "../../assets";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { DataUnit, DataWeapon } from "../../types";
import { GlobalAppContext } from "../../contexts";
import { useDataUnit, useDataWeapon } from "../../hooks";

type PageEditEquipmentProps = {
  pageStorageKey: string;
  onStatChange: (next_stat: StatObject) => void;
  onContextChange: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
};
export const PageEditEquipment: FC<PageEditEquipmentProps> = (
  props,
) => {
  const { pageStorageKey, onStatChange, onContextChange } = props;

  const context = useContext(GlobalAppContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback((): void => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback((): void => {
    setDialogOpen(false);
  }, []);

  const {
    dataWeapon: dataWeapon,
    setWeapon: setWeapon,
    setPotentialLevel: setWeaponPotentialLevel,
    setEnhancement: setEnhancementWeapon,
    setFixa: setFixaWeapon,
    setAugment: setAugmentWeapon,
  } = useDataWeapon(`${pageStorageKey}-weapon`);
  const {
    dataUnit: dataUnitA,
    setUnit: setUnitA,
    setEnhancement: setEnhancementUnitA,
    setFixa: setFixaUnitA,
    setAugment: setAugmentUnitA,
  } = useDataUnit(`${pageStorageKey}-unit-a`);
  const {
    dataUnit: dataUnitB,
    setUnit: setUnitB,
    setEnhancement: setEnhancementUnitB,
    setFixa: setFixaUnitB,
    setAugment: setAugmentUnitB,
  } = useDataUnit(`${pageStorageKey}-unit-b`);
  const {
    dataUnit: dataUnitC,
    setUnit: setUnitC,
    setEnhancement: setEnhancementUnitC,
    setFixa: setFixaUnitC,
    setAugment: setAugmentUnitC,
  } = useDataUnit(`${pageStorageKey}-unit-c`);

  useEffect(() => {
    const unique_active_augments: Set<string> = new Set();

    if (dataWeapon.weapon !== null) {
      dataWeapon.augments
        .slice(0, Augment.getAugmentSlot(dataWeapon.enhancement))
        .forEach((augment) => {
          if (augment === null) {
            return;
          }
          unique_active_augments.add(augment.label);
        });
    }
    if (dataUnitA.unit !== null) {
      dataUnitA.augments
        .slice(0, Augment.getAugmentSlot(dataUnitA.enhancement))
        .forEach((augment) => {
          if (augment === null) {
            return;
          }
          unique_active_augments.add(augment.label);
        });
    }
    if (dataUnitB.unit !== null) {
      dataUnitB.augments
        .slice(0, Augment.getAugmentSlot(dataUnitB.enhancement))
        .forEach((augment) => {
          if (augment === null) {
            return;
          }
          unique_active_augments.add(augment.label);
        });
    }
    if (dataUnitC.unit !== null) {
      dataUnitC.augments
        .slice(0, Augment.getAugmentSlot(dataUnitC.enhancement))
        .forEach((augment) => {
          if (augment === null) {
            return;
          }
          unique_active_augments.add(augment.label);
        });
    }

    onContextChange(({ character, ...rest }) => {
      const next = { ...rest, character: { ...character } };
      next.character.uniqueAugments = unique_active_augments.size;
      return next;
    });
  }, [dataWeapon, dataUnitA, dataUnitB, dataUnitC]);

  const handleUnitSyncA = useCallback((): void => {
    setUnitB(dataUnitA.unit);
    setEnhancementUnitB(dataUnitA.enhancement);
    setFixaUnitB(dataUnitA.fixa);

    setUnitC(dataUnitA.unit);
    setEnhancementUnitC(dataUnitA.enhancement);
    setFixaUnitC(dataUnitA.fixa);

    dataUnitA.augments.forEach((next_augment, augment_index) => {
      setAugmentUnitB(next_augment, augment_index);
      setAugmentUnitC(next_augment, augment_index);
    });
  }, [dataUnitA]);
  const handleUnitSyncB = useCallback((): void => {
    setUnitA(dataUnitB.unit);
    setEnhancementUnitA(dataUnitB.enhancement);
    setFixaUnitA(dataUnitB.fixa);

    setUnitC(dataUnitB.unit);
    setEnhancementUnitC(dataUnitB.enhancement);
    setFixaUnitC(dataUnitB.fixa);

    dataUnitB.augments.forEach((next_augment, augment_index) => {
      setAugmentUnitA(next_augment, augment_index);
      setAugmentUnitC(next_augment, augment_index);
    });
  }, [dataUnitB]);
  const handleSyncUnitC = useCallback((): void => {
    setUnitA(dataUnitC.unit);
    setEnhancementUnitA(dataUnitC.enhancement);
    setFixaUnitA(dataUnitC.fixa);

    setUnitB(dataUnitC.unit);
    setEnhancementUnitB(dataUnitC.enhancement);
    setFixaUnitB(dataUnitC.fixa);

    dataUnitC.augments.forEach((next_augment, augment_index) => {
      setAugmentUnitA(next_augment, augment_index);
      setAugmentUnitB(next_augment, augment_index);
    });
  }, [dataUnitC]);

  const stat_weapon = useMemo((): StatObject => {
    return DataWeapon.getStatObject(context, dataWeapon);
  }, [context, dataWeapon]);
  const stat_unit_a = useMemo((): StatObject => {
    return DataUnit.getStatObject(context, dataUnitA);
  }, [context, dataUnitA]);
  const stat_unit_b = useMemo((): StatObject => {
    return DataUnit.getStatObject(context, dataUnitB);
  }, [context, dataUnitB]);
  const stat_unit_c = useMemo((): StatObject => {
    return DataUnit.getStatObject(context, dataUnitC);
  }, [context, dataUnitC]);

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
      <Container maxWidth="md">
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
              formData={dataWeapon}
              onWeaponChange={setWeapon}
              onPotentialLevelChange={setWeaponPotentialLevel}
              onEnhancementChange={setEnhancementWeapon}
              onFixaChange={setFixaWeapon}
              onAugmentChange={setAugmentWeapon}
            />
            <FormUnit
              cardTitle="Unit A"
              stat={stat_unit_a}
              formData={dataUnitA}
              onUnitChange={setUnitA}
              onEnhancementChange={setEnhancementUnitA}
              onFixaChange={setFixaUnitA}
              onAugmentChange={setAugmentUnitA}
              onSync={handleUnitSyncA}
            />
            <FormUnit
              cardTitle="Unit B"
              stat={stat_unit_b}
              formData={dataUnitB}
              onUnitChange={setUnitB}
              onEnhancementChange={setEnhancementUnitB}
              onFixaChange={setFixaUnitB}
              onAugmentChange={setAugmentUnitB}
              onSync={handleUnitSyncB}
            />
            <FormUnit
              cardTitle="Unit C"
              stat={stat_unit_c}
              formData={dataUnitC}
              onUnitChange={setUnitC}
              onEnhancementChange={setEnhancementUnitC}
              onFixaChange={setFixaUnitC}
              onAugmentChange={setAugmentUnitC}
              onSync={handleSyncUnitC}
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
