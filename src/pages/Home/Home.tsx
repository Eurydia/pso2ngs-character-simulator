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
              desc="It's dangerous to go alone."
              destination="/config-equipment"
            />
            <ConfigCard
              title="Food"
              desc="Invent the best snack of all time."
              destination="/config-food"
            />
            <ConfigCard
              title="Class & Skill tree"
              destination="/config-character"
              desc="Character class and skills."
            />
            <ConfigCard
              title="Addons"
              desc="Account-wide effects."
              destination="/config-addon"
            />
            <ConfigCard
              title="External effects"
              desc="Effects caused by others."
              destination="/config-buffs"
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
              <StatView stat={props.stat} maxHeight="" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
