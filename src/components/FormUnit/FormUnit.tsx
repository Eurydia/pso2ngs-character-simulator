import { FC, Fragment, useState } from "react";
import {
  Drawer,
  Grid,
  Box,
  Stack,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import { BarChart } from "@mui/icons-material";

import { Fixa, GroupEnumFixa, Unit } from "../../assets";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";
import StatView from "../StatView";

import { collectStats } from "./helper";

type FormWeaponProps = {
  title: string;
};
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueUnit, setValueUnit] = useState<Unit | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valueEnhancement, setValueEnhancement] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment();

  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const handleDrawerClose = () => {
    setDrawerIsOpen(false);
  };

  const handleDrawerOpen = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const stats_to_display = collectStats(
    valueUnit,
    valueEnhancement,
    valueFixa,
    valueAugments,
  );

  return (
    <Fragment>
      <Paper>
        <Stack spacing={1}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignContent="center"
          >
            <Typography fontWeight="bold" fontSize="large">
              {props.title}
            </Typography>
            <IconButton onClick={handleDrawerOpen}>
              <BarChart />
            </IconButton>
          </Stack>
          <AutocompleteUnit
            value={valueUnit}
            onChange={setValueUnit}
          />
          <FieldEnhancement
            valueMin={0}
            valueMax={60}
            value={valueEnhancement}
            onChange={setValueEnhancement}
          />
          <AutocompleteFixa
            value={valueFixa}
            onChange={setValueFixa}
            mode={GroupEnumFixa.UNIT}
          />
          <Box>
            <Grid container spacing={1} columns={{ xs: 1, sm: 2 }}>
              {valueAugments.map((aug, index) => (
                <Grid key={`augment-${index}`} item xs={1}>
                  <AutocompleteAugment
                    value={aug}
                    onChange={(new_value) =>
                      setValueAugments(new_value, index)
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Paper>
      <Drawer
        open={drawerIsOpen}
        onClose={handleDrawerClose}
        anchor="right"
        variant="temporary"
      >
        <Box padding={2} margin={1}>
          <StatView
            title={`Stats For ${props.title}`}
            stat={stats_to_display}
          />
        </Box>
      </Drawer>
    </Fragment>
  );
};

export default FormWeapon;
