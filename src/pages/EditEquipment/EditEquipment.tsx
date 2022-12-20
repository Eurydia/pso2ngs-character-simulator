import { FC, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

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
      <Grid container columns={{ sm: 1, md: 1 }}>
        <Grid item xs={1}>
          <Typography>{summaryWeapon.equipment}</Typography>
          <Typography>{summaryWeapon.fixa}</Typography>
          {summaryWeapon.augments
            .fill("nope", summaryWeapon.augments.length, 6)
            .map((value, index) => (
              <Typography key={`${value}-${index}`}>
                {value}
              </Typography>
            ))}
        </Grid>
        <Grid item xs={1}>
          <FormWeapon title="Weapon" onChange={handleWeaponChange} />
        </Grid>
        {/* <Grid item xs={1}>
          <FormUnit title="Unit #1" />
        </Grid>
        <Grid item xs={1}>
          <FormUnit title="Unit #2" />
        </Grid>
        <Grid item xs={1}>
          <FormUnit title="Unit #3" />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default EditEquipment;
