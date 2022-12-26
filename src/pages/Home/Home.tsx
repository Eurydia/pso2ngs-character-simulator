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
            description="It's dangerous to go alone."
          />
        </Grid>
        <Grid item md={1}>
          <ConfigCard
            title="Food"
            destination="/config-food"
            description="Invent the best snack of all time."
          />
        </Grid>
        <Grid item md={1}>
          <ConfigCard
            title="Class skills"
            destination="/config-character"
            description="Main & sub class, and class skills."
          />
        </Grid>
        <Grid item md={1}>
          <ConfigCard
            title="Addon skills"
            destination="/config-addon"
            description="Account-wide effects."
          />
        </Grid>
        <Grid item md={1}>
          <ConfigCard
            title="External effects"
            destination="/config-buffs"
            description="Effects caused by others."
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
