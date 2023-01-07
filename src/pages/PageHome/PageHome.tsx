import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
} from "@mui/material";

import { StatView } from "../../components";
import { StatObject } from "../../assets";

import { CustomCard } from "./CustomCard";

type PageHomeProps = {
  stat: StatObject;
};
export const PageHome: FC<PageHomeProps> = (props) => {
  const { stat } = props;

  return (
    <Container maxWidth="lg">
      <Box margin={4}>
        <Grid container columns={{ xs: 1, md: 2 }} spacing={1}>
          <Grid item xs={1}>
            <Stack spacing={1}>
              <CustomCard
                title="Equipment"
                desc="It's dangerous to go alone."
                destination="/config-equipment"
              />
              <CustomCard
                title="Food"
                desc="Invent the best snack of all time."
                destination="/config-food"
              />
              <CustomCard
                title="Class & Skill tree"
                destination="/config-character"
                desc="Character class and skills."
              />
              <CustomCard
                title="Addons"
                desc="Account-wide effects."
                destination="/config-addon"
              />
              <CustomCard
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
                <StatView stat={stat} maxHeight="" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
