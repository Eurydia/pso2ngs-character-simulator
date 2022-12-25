import { FC } from "react";
import { Grid } from "@mui/material";
import ConfigCard from "./ConfigCard";

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
        <ConfigCard
          title="Equipment"
          destination="/config-equipment"
          description="Edit your equipment here."
        />
      </Grid>
      <Grid item md={1}>
        <ConfigCard
          title="Character"
          destination="/config-character"
          description="Edit your character here."
        />
      </Grid>
      <Grid item md={1}>
        <ConfigCard
          title="Food"
          destination="/config-food"
          description="Edit your food buff here."
        />
      </Grid>
    </Grid>
  );
};
export default Home;
