import { FC, Fragment, useState, useEffect } from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import { ActionContext, StatObject } from "../../assets";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { DataUnit, DataWeapon } from "../../types";
import { useFormUnit, useFormWeapon } from "../../hooks";

import { SummaryView } from "./SummaryView";

type PageEditEquipmentProps = {
  isVisible: boolean;
  context: ActionContext;
  storageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditEquipment: FC<PageEditEquipmentProps> = (
  props,
) => {
  const { context, storageKey, onStatChange, isVisible } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const [formWeapon, setFormWeapon] = useFormWeapon(
    `${storageKey}-w`,
  );
  const [formUnitA, setFormUnitA] = useFormUnit(`${storageKey}-ua`);
  const [formUnitB, setFormUnitB] = useFormUnit(`${storageKey}-ub`);
  const [formUnitC, setFormUnitC] = useFormUnit(`${storageKey}-uc`);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleWeaponChange = (
    getter: (prev: DataWeapon) => DataWeapon,
  ) => {
    setFormWeapon(getter);
  };

  const handleUnitChangeA = (
    getter: (prev: DataUnit) => DataUnit,
  ) => {
    setFormUnitA(getter);
  };
  const handleUnitChangeB = (
    getter: (prev: DataUnit) => DataUnit,
  ) => {
    setFormUnitB(getter);
  };
  const handleUnitChangeC = (
    getter: (prev: DataUnit) => DataUnit,
  ) => {
    setFormUnitC(getter);
  };

  const handleUnitSyncA = () => {
    setFormUnitB((prev) => {
      const next: DataUnit = {
        ...formUnitA,
        augments: [...formUnitA.augments],
      };
      return next;
    });
    setFormUnitC((prev) => {
      const next: DataUnit = {
        ...formUnitA,
        augments: [...formUnitA.augments],
      };
      return next;
    });
  };
  const handleUnitSyncB = () => {
    setFormUnitA((prev) => {
      const next: DataUnit = {
        ...formUnitB,
        augments: [...formUnitB.augments],
      };
      return next;
    });
    setFormUnitC((prev) => {
      const next: DataUnit = {
        ...formUnitB,
        augments: [...formUnitB.augments],
      };
      return next;
    });
  };
  const handleUnitSyncC = () => {
    setFormUnitA((prev) => {
      const next: DataUnit = {
        ...formUnitC,
        augments: [...formUnitC.augments],
      };
      return next;
    });
    setFormUnitB((prev) => {
      const next: DataUnit = {
        ...formUnitC,
        augments: [...formUnitC.augments],
      };
      return next;
    });
  };

  useEffect(() => {
    const weapon = DataWeapon.getStatObject(context, formWeapon);
    const unit_a = DataUnit.getStatObject(context, formUnitA);
    const unit_b = DataUnit.getStatObject(context, formUnitB);
    const unit_c = DataUnit.getStatObject(context, formUnitC);

    let stat = StatObject.merge(weapon, unit_a);
    stat = StatObject.merge(stat, unit_b);
    stat = StatObject.merge(stat, unit_c);

    onStatChange(stat);
  }, [context, formWeapon, formUnitA, formUnitB, formUnitC]);

  const summary_weapon = DataWeapon.getSummaryObject(formWeapon);
  const summary_unit_a = DataUnit.getSummaryObject(formUnitA);
  const summary_unit_b = DataUnit.getSummaryObject(formUnitB);
  const summary_unit_c = DataUnit.getSummaryObject(formUnitC);

  const stat_weapon = DataWeapon.getStatObject(context, formWeapon);
  const stat_unit_a = DataUnit.getStatObject(context, formUnitA);
  const stat_unit_b = DataUnit.getStatObject(context, formUnitB);
  const stat_unit_c = DataUnit.getStatObject(context, formUnitC);

  let stat_total = StatObject.merge(stat_weapon, stat_unit_a);
  stat_total = StatObject.merge(stat_total, stat_unit_b);
  stat_total = StatObject.merge(stat_total, stat_unit_c);

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
              stat={stat_weapon}
              cardTitle="Weapon"
              formData={formWeapon}
              onFormDataChange={handleWeaponChange}
            />
            <FormUnit
              cardTitle="Unit A"
              stat={stat_unit_a}
              formData={formUnitA}
              onFormDataChange={handleUnitChangeA}
              onSync={handleUnitSyncA}
            />
            <FormUnit
              cardTitle="Unit B"
              stat={stat_unit_b}
              formData={formUnitB}
              onFormDataChange={handleUnitChangeB}
              onSync={handleUnitSyncB}
            />
            <FormUnit
              cardTitle="Unit C"
              stat={stat_unit_c}
              formData={formUnitC}
              onFormDataChange={handleUnitChangeC}
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
          <Stack spacing={2}>
            <SummaryView
              items={[
                summary_weapon,
                summary_unit_a,
                summary_unit_b,
                summary_unit_c,
              ]}
            />
            <StatView stat={stat_total} maxHeight="" />
          </Stack>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
