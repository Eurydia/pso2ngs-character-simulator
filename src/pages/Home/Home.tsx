import { FC } from "react";
import { Box, Grid } from "@mui/material";

import ConfigCard from "./ConfigCard";

type HomeProps = {};
const Home: FC<HomeProps> = (props) => {
  return (
    <Box padding={2}>
      <Grid
        container
        width={1}
        columns={{ md: 2, xs: 1 }}
        spacing={1}
      >
        <Grid item md={1}>
          <ConfigCard
            title="Equipment"
            destination="/config-equipment"
            description=""
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
    </Box>
  );
};
export default Home;
