import { FC } from "react";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

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
      <Grid item md={1}>
        <CustomCard
          title="Equipment"
          to="/config-equipment"
          description="Edit your equipment here."
        />
      </Grid>
      <Grid item md={1}>
        <CustomCard
          title="Character"
          to="/config-character"
          description="Edit your character here."
        />
      </Grid>
      <Grid item md={1}>
        <CustomCard
          title="Food"
          to="/config-food"
          description="Edit your food buff here."
        />
      </Grid>
    </Grid>
  );
};
export default Home;
