import { FC, useState } from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import { FormWeapon, FormUnit, StatView } from "../../components";
import { statObject, StatEnum, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [valueWeapon, setValueWeapon] = useState<StatObject>(
    statObject({}),
  );

  const [summaryWeapon, setSummaryWeapon] =
    useState<SummaryEquipment>({
      equipment: "",
      fixa: "",
      augments: [],
    });

  const handleWeaponChange = (
    stats: StatObject,
    summary: SummaryEquipment,
  ) => {
    setValueWeapon(stats);
    setSummaryWeapon(summary);
  };

  return (
    <Box marginY={4} marginX={8}>
      <Stack spacing={2}>
        <Paper>
          <Box padding={4}>
            <Grid container columns={{ xs: 1, md: 2 }}>
              <Grid item xs={1}>
                <Stack>
                  <Typography>
                    Equipment: {summaryWeapon.equipment}
                  </Typography>
                  <Typography>Fixa: {summaryWeapon.fixa}</Typography>
                  {summaryWeapon.augments.map((value, index) => (
                    <Typography key={`${value}-${index}`}>
                      {value}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={1}>
                <Stack>
                  <Typography>
                    Equipment: {summaryWeapon.equipment}
                  </Typography>
                  <Typography>Fixa: {summaryWeapon.fixa}</Typography>
                  {summaryWeapon.augments.map((value, index) => (
                    <Typography key={`${value}-${index}`}>
                      {value}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={1}>
                <Stack>
                  <Typography>
                    Equipment: {summaryWeapon.equipment}
                  </Typography>
                  <Typography>Fixa: {summaryWeapon.fixa}</Typography>
                  {summaryWeapon.augments.map((value, index) => (
                    <Typography key={`${value}-${index}`}>
                      {value}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={1}>
                <Stack>
                  <Typography>
                    Equipment: {summaryWeapon.equipment}
                  </Typography>
                  <Typography>Fixa: {summaryWeapon.fixa}</Typography>
                  {summaryWeapon.augments.map((value, index) => (
                    <Typography key={`${value}-${index}`}>
                      {value}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <FormWeapon title="Weapon" onChange={handleWeaponChange} />
        <FormUnit title="Unit #1" />
        <FormUnit title="Unit #2" />
        <FormUnit title="Unit #3" />
      </Stack>
    </Box>
  );
};

export default EditEquipment;
