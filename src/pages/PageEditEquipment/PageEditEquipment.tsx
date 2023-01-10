import { FC, Fragment, useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Assignment, BarChartRounded } from "@mui/icons-material";

import { ActionContext, statObject, StatObject } from "../../assets";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { DataUnit, DataWeapon, SummaryEquipment } from "../../types";
import { useFormUnit, useFormWeapon } from "../../hooks";

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

type SummaryViewProps = {
  items: SummaryEquipment[];
};
const SummaryView: FC<SummaryViewProps> = (props) => {
  const { items } = props;

  return (
    <Box>
      <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
        {items.map((item, index) => {
          return (
            <Grid key={`item-${index}`} item xs={1}>
              <SummaryItem {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

type PageEditEquipmentProps = {
  context: ActionContext;
  storageKey: string;
  onChange: (stat: StatObject) => void;
};
export const PageEditEquipment: FC<PageEditEquipmentProps> = (
  props,
) => {
  const { storageKey, context, onChange } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const [formWeapon, setFormWeapon] = useFormWeapon(
    `${storageKey}-w`,
  );
  const [formUnitA, setFormUnitA] = useFormUnit(`${storageKey}-ua`);
  const [formUnitB, setFormUnitB] = useFormUnit(`${storageKey}-ub`);
  const [formUnitC, setFormUnitC] = useFormUnit(`${storageKey}-uc`);

  const stat_weapon = DataWeapon.getStatObject(context, formWeapon);
  const stat_unit_a = DataUnit.getStatObject(context, formUnitA);
  const stat_unit_b = DataUnit.getStatObject(context, formUnitB);
  const stat_unit_c = DataUnit.getStatObject(context, formUnitC);

  let stat_total = StatObject.merge(stat_weapon, stat_unit_a);
  stat_total = StatObject.merge(stat_total, stat_unit_b);
  stat_total = StatObject.merge(stat_total, stat_unit_c);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleUnitSyncA = () => {
    setFormUnitB(formUnitA);
    setFormUnitC(formUnitA);
  };

  const handleUnitSyncB = () => {
    setFormUnitA(formUnitB);
    setFormUnitC(formUnitB);
  };

  const handleUnitSyncC = () => {
    setFormUnitA(formUnitC);
    setFormUnitB(formUnitC);
  };

  const summary_weapon = DataWeapon.getSummaryObject(formWeapon);
  const summary_unit_a = DataUnit.getSummaryObject(formUnitA);
  const summary_unit_b = DataUnit.getSummaryObject(formUnitB);
  const summary_unit_c = DataUnit.getSummaryObject(formUnitC);

  return (
    <Fragment>
      <Fab
        disableRipple
        onClick={handleDialogOpen}
        disabled={
          formWeapon.weapon === null &&
          formUnitA.unit === null &&
          formUnitB.unit === null &&
          formUnitC.unit === null
        }
        sx={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
        }}
      >
        <BarChartRounded />
      </Fab>
      <Box margin={4}>
        <Stack spacing={2}>
          <FormWeapon
            context={context}
            cardTitle="Weapon"
            formData={formWeapon}
            onFormDataChange={setFormWeapon}
          />
          <FormUnit
            context={context}
            cardTitle="Unit A"
            formData={formUnitA}
            onFormDataChange={setFormUnitA}
            onSync={handleUnitSyncA}
          />
          <FormUnit
            context={context}
            cardTitle="Unit B"
            formData={formUnitB}
            onFormDataChange={setFormUnitB}
            onSync={handleUnitSyncB}
          />
          <FormUnit
            context={context}
            cardTitle="Unit C"
            formData={formUnitC}
            onFormDataChange={setFormUnitC}
            onSync={handleUnitSyncC}
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
