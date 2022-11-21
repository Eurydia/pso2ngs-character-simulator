import { Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Weapon } from "../../assets";
import FieldWeapon from "../FieldWeapon";

interface FormWeaponProps {
  title: string;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
  return (
    <Grid container columns={{ sm: 1, md: 2 }}>
      <Grid item xs={2}>
        <Typography fontWeight="bold" fontSize="large">
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <FieldWeapon value={valueWeapon} onChange={setValueWeapon} />
      </Grid>
    </Grid>
  );
};

export default FormWeapon;
