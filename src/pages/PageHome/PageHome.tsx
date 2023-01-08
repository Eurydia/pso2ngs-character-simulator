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

import { FormContextEditor, StatView } from "../../components";
import { ActionContext, StatObject } from "../../assets";

import { LinkCard } from "./LinkCard";

type PageHomeProps = {
  stat: StatObject;
  context: ActionContext;
  onContextChange: (
    value: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
export const PageHome: FC<PageHomeProps> = (props) => {
  const { stat, context, onContextChange } = props;

  return (
    <Container maxWidth="lg">
      <Box margin={4}>
        <Grid container spacing={2} columns={{ xs: 1, md: 2 }}>
          <Grid item xs={1}>
            <LinkCard
              title="Equipment"
              desc="It's dangerous to go alone."
              destination="/config-equipment"
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              title="Food"
              desc="Invent the best snack of all time."
              destination="/config-food"
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              title="Class & Skill tree"
              destination="/config-character"
              desc="Character class and skills."
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              title="Addons"
              desc="Account-wide effects."
              destination="/config-addon"
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              title="External effects"
              desc="Effects caused by others."
              destination="/config-buffs"
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1}>
            <FormContextEditor
              formData={context}
              onFormDataChange={onContextChange}
            />
          </Grid>
          <Grid item xs={1}>
            <Card variant="outlined" sx={{ padding: 1 }}>
              <CardHeader
                title="Overview"
                titleTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "x-large",
                }}
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
