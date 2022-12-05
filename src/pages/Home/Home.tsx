import { FC } from "react";
import { CardContent, Grid } from "@mui/material";
import FormAugment from "../../components/FormAugment";
import FieldAugment from "../../components/AutocompleteAugment";
import FieldWeapon from "../../components/FieldWeapon";

interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  return (
    <Grid
      container
      width={1}
      columns={{ md: 2, xs: 1 }}
      padding={2}
      spacing={4}
    >
      <Grid item md={2}></Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
};
export default Home;
