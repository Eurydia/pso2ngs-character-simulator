import { FC, Fragment, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { ActionContext, StatObject } from "../../assets";
import { useFormUnit, useFormWeapon } from "../../hooks";
import { FormWeapon, FormUnit, StatView } from "../../components";

import {
  FormDataUnit,
  FormDataWeapon,
  SummaryEquipment,
} from "../../types";
import { BarChart } from "@mui/icons-material";

const SummaryItem: FC<SummaryEquipment> = (props) => {
  const { equipment, fixa, augments } = props;

  return (
    <Box>
      <Typography fontWeight="bold">{equipment}</Typography>
      <Typography>{fixa}</Typography>
      {augments.map((value, index) => (
        <Typography key={`${value}-${index}`}>{value}</Typography>
      ))}
    </Box>
  );
};

type PageEditEquipmentProps = {
  stat: StatObject;
  ctx: ActionContext;
};
export const PageEditEquipment: FC<PageEditEquipmentProps> = (
  props,
) => {
  const { ctx, stat } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const [weapon, setWeapon] = useFormWeapon("eq-w");
  const [unitA, setUnitA] = useFormUnit("eq-ua");
  const [unitB, setUnitB] = useFormUnit("eq-ub");
  const [unitC, setUnitC] = useFormUnit("eq-uc");

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleWeaponChange = (
    data: FormDataWeapon | ((prev: FormDataWeapon) => FormDataWeapon),
  ) => {
    setWeapon(data);
  };

  const handleUnitChangeA = (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ): void => {
    setUnitA(data);
  };

  const handleUnitChangeB = (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ): void => {
    setUnitB(data);
  };

  const handleUnitChangeC = (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ): void => {
    setUnitC(data);
  };

  const handleSyncUnitA = () => {
    handleUnitChangeB(unitA);
    handleUnitChangeC(unitA);
  };

  const handleSyncUnitB = () => {
    handleUnitChangeA(unitB);
    handleUnitChangeC(unitB);
  };

  const handleSyncUnitC = () => {
    handleUnitChangeA(unitC);
    handleUnitChangeB(unitC);
  };

  const summary_weapon = FormDataWeapon.getSummaryObject(weapon);
  const summary_unit_a = FormDataUnit.getSummaryObject(unitA);
  const summary_unit_b = FormDataUnit.getSummaryObject(unitB);
  const summary_unit_c = FormDataUnit.getSummaryObject(unitC);

  const stat_weapon = FormDataWeapon.getStatObject(ctx, weapon);
  const stat_unit_a = FormDataUnit.getStatObject(ctx, unitA);
  const stat_unit_b = FormDataUnit.getStatObject(ctx, unitB);
  const stat_unit_c = FormDataUnit.getStatObject(ctx, unitC);

  return (
    <Fragment>
      <Box margin={4}>
        <Fab
          onClick={handleDialogOpen}
          disabled={
            weapon.weapon === null &&
            unitA.unit === null &&
            unitB.unit === null &&
            unitC.unit === null
          }
          sx={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
          }}
        >
          <BarChart />
        </Fab>
        <Stack spacing={2}>
          <FormWeapon
            cardTitle="Weapon"
            stat={stat_weapon}
            formValue={weapon}
            onFormValueChange={handleWeaponChange}
          />
          <FormUnit
            cardTitle="Unit A"
            stat={stat_unit_a}
            formValue={unitA}
            onFormValueChange={handleUnitChangeA}
            onSync={handleSyncUnitA}
          />
          <FormUnit
            cardTitle="Unit B"
            stat={stat_unit_b}
            formValue={unitB}
            onFormValueChange={handleUnitChangeB}
            onSync={handleSyncUnitB}
          />
          <FormUnit
            cardTitle="Unit C"
            stat={stat_unit_c}
            formValue={unitC}
            onFormValueChange={handleUnitChangeC}
            onSync={handleSyncUnitC}
          />
        </Stack>
      </Box>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>Equipment summary</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Grid container spacing={1} columns={{ xs: 1, sm: 2 }}>
              <Grid item xs={1}>
                <SummaryItem {...summary_weapon} />
              </Grid>
              <Grid item xs={1}>
                <SummaryItem {...summary_unit_a} />
              </Grid>
              <Grid item xs={1}>
                <SummaryItem {...summary_unit_b} />
              </Grid>
              <Grid item xs={1}>
                <SummaryItem {...summary_unit_c} />
              </Grid>
            </Grid>
            <StatView stat={stat} maxHeight="" />
          </Stack>
        </DialogContent>
        <DialogActions disableSpacing>
          <Button onClick={handleDialogClose}>close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
