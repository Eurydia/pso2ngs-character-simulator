import { FC, useState } from "react";
import { Box, Paper, Stack } from "@mui/material";

import { FormWeapon, FormUnit, StatView } from "../../components";
import { statObject, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [statWeapon, setStatWeapon] = useState<StatObject>(
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
    setStatWeapon(stats);
    setSummaryWeapon(summary);
  };

  return (
    <Box marginY={4} marginX={8}>
      <Stack spacing={2}>
        {/* <Paper>
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
        </Paper> */}
        <Paper>
          <StatView title="weapon" stat={statWeapon} />
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
