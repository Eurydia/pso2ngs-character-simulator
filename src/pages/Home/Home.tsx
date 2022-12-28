import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
} from "@mui/material";

import { StatView } from "../../components";
import { StatObject } from "../../assets";

import ConfigCard from "./ConfigCard";

type HomeProps = {
  stat: StatObject;
};
const Home: FC<HomeProps> = (props) => {
  return (
    <Box margin={4}>
      <Grid container columns={{ xs: 1, md: 2 }} spacing={1}>
        <Grid item xs={1}>
          <Stack spacing={1}>
            <ConfigCard
              title="Equipment"
              destination="/config-equipment"
              description="It's dangerous to go alone."
            />
            <ConfigCard
              title="Food"
              destination="/config-food"
              description="Invent the best snack of all time."
            />
            <ConfigCard
              title="Class skills"
              destination="/config-character"
              description="Main & sub class, and class skills."
            />
            <ConfigCard
              title="Addon skills"
              destination="/config-addon"
              description="Account-wide effects."
            />
            <ConfigCard
              title="External effects"
              destination="/config-buffs"
              description="Effects caused by others."
            />
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardHeader
              title="Overview"
              titleTypographyProps={{ fontWeight: "bold" }}
            />
            <CardContent>
              <StatView stat={props.stat} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
