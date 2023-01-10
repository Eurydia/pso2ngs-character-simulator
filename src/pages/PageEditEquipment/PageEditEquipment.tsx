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
import { Assignment } from "@mui/icons-material";

import { ActionContext, statObject, StatObject } from "../../assets";
import { FormWeapon, FormUnit, StatView } from "../../components";
import {
  FormDataUnit,
  FormDataWeapon,
  SummaryEquipment,
} from "../../types";
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

  const summary_weapon = FormDataWeapon.getSummaryObject(formWeapon);
  const summary_unit_a = FormDataUnit.getSummaryObject(formUnitA);
  const summary_unit_b = FormDataUnit.getSummaryObject(formUnitB);
  const summary_unit_c = FormDataUnit.getSummaryObject(formUnitC);

  const stat_weapon = FormDataWeapon.getStatObject(
    context,
    formWeapon,
  );
  const stat_unit_a = FormDataUnit.getStatObject(context, formUnitA);
  const stat_unit_b = FormDataUnit.getStatObject(context, formUnitB);
  const stat_unit_c = FormDataUnit.getStatObject(context, formUnitC);

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

  return (
    <Fragment>
      <Box margin={4}>
        <Stack spacing={2}>
          <FormWeapon
            cardTitle="Weapon"
            stat={stat_weapon}
            formData={formWeapon}
            onFormDataChange={setFormWeapon}
          />
          <FormUnit
            cardTitle="Unit A"
            stat={stat_unit_a}
            formValue={formUnitA}
            onFormValueChange={setFormUnitA}
            onSync={handleUnitSyncA}
          />
          <FormUnit
            cardTitle="Unit B"
            stat={stat_unit_b}
            formValue={formUnitB}
            onFormValueChange={setFormUnitB}
            onSync={handleUnitSyncB}
          />
          <FormUnit
            cardTitle="Unit C"
            stat={stat_unit_c}
            formValue={formUnitC}
            onFormValueChange={setFormUnitC}
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
        <DialogActions disableSpacing>
          <Button onClick={handleDialogClose}>close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
