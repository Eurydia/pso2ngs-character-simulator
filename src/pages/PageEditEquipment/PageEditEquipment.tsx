import { FC, Fragment, useState } from "react";
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

import { ActionContext, StatObject } from "../../assets";
import { FormWeapon, FormUnit, StatView } from "../../components";
import {
  FormDataUnit,
  FormDataWeapon,
  SummaryEquipment,
} from "../../types";

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
  weapon: FormDataWeapon;
  unitA: FormDataUnit;
  unitB: FormDataUnit;
  unitC: FormDataUnit;

  onWeaponChange: (
    data: FormDataWeapon | ((prev: FormDataWeapon) => FormDataWeapon),
  ) => void;
  onUnitChangeA: (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ) => void;
  onUnitChangeB: (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ) => void;
  onUnitChangeC: (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ) => void;
};
export const PageEditEquipment: FC<PageEditEquipmentProps> = (
  props,
) => {
  const {
    context,

    weapon,
    unitA,
    unitB,
    unitC,
    onWeaponChange,
    onUnitChangeA,
    onUnitChangeB,
    onUnitChangeC,
  } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleUnitSyncA = () => {
    onUnitChangeB(unitA);
    onUnitChangeC(unitA);
  };

  const handleUnitSyncB = () => {
    onUnitChangeA(unitB);
    onUnitChangeC(unitB);
  };

  const handleUnitSyncC = () => {
    onUnitChangeA(unitC);
    onUnitChangeB(unitC);
  };

  const summary_weapon = FormDataWeapon.getSummaryObject(weapon);
  const summary_unit_a = FormDataUnit.getSummaryObject(unitA);
  const summary_unit_b = FormDataUnit.getSummaryObject(unitB);
  const summary_unit_c = FormDataUnit.getSummaryObject(unitC);

  const stat_weapon = FormDataWeapon.getStatObject(context, weapon);
  const stat_unit_a = FormDataUnit.getStatObject(context, unitA);
  const stat_unit_b = FormDataUnit.getStatObject(context, unitB);
  const stat_unit_c = FormDataUnit.getStatObject(context, unitC);

  let stat_total = StatObject.merge(stat_weapon, stat_unit_a);
  stat_total = StatObject.merge(stat_total, stat_unit_b);
  stat_total = StatObject.merge(stat_total, stat_unit_c);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Tooltip
          placement="top"
          title={<Typography>Open summary</Typography>}
        >
          <Fab
            onClick={handleDialogOpen}
            sx={{
              display:
                weapon.weapon === null &&
                unitA.unit === null &&
                unitB.unit === null &&
                unitC.unit === null
                  ? "none"
                  : "flex",
              position: "fixed",
              bottom: "24px",
              right: "24px",
            }}
          >
            <Assignment />
          </Fab>
        </Tooltip>
        <Box margin={4}>
          <Stack spacing={2}>
            <FormWeapon
              cardTitle="Weapon"
              stat={stat_weapon}
              formValue={weapon}
              onFormValueChange={onWeaponChange}
            />
            <FormUnit
              cardTitle="Unit A"
              stat={stat_unit_a}
              formValue={unitA}
              onFormValueChange={onUnitChangeA}
              onSync={handleUnitSyncA}
            />
            <FormUnit
              cardTitle="Unit B"
              stat={stat_unit_b}
              formValue={unitB}
              onFormValueChange={onUnitChangeB}
              onSync={handleUnitSyncB}
            />
            <FormUnit
              cardTitle="Unit C"
              stat={stat_unit_c}
              formValue={unitC}
              onFormValueChange={onUnitChangeC}
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
