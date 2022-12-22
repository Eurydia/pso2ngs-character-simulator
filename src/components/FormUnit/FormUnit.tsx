import { FC, Fragment, useState } from "react";
import {
  Drawer,
  Grid,
  Box,
  Stack,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { BarChart } from "@mui/icons-material";

import { FixaInterface, GroupEnumFixa, Unit } from "../../assets";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";

import FormDrawer from "./FormDrawer";
import { collectStats } from "./helper";
import FormBase from "../FormBase";

type FormWeaponProps = {
  title: string;
};
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueUnit, setValueUnit] = useState<Unit | null>(null);
  const [valueFixa, setValueFixa] = useState<FixaInterface | null>(
    null,
  );
  const [valueEnhancement, setValueEnhancement] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment();

  const stats_to_display = collectStats(
    valueUnit,
    valueEnhancement,
    valueFixa,
    valueAugments,
  );

  return (
    <FormBase>
      <Stack spacing={1}>
        <Typography fontWeight="bold" fontSize="large">
          {props.title}
        </Typography>
        <AutocompleteUnit value={valueUnit} onChange={setValueUnit} />
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
    </FormBase>
  );
};

export default FormWeapon;
