import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from "@mui/material";

import { StatObject } from "../../assets";
import { FormContextEditor, StatView } from "../../components";

import { LinkCard } from "./LinkCard";

type PageHomeProps = {
  stat: StatObject;
  onPageChange: (next_page: number) => void;
};
export const PageHome: FC<PageHomeProps> = (props) => {
  const { stat, onPageChange } = props;

  return (
    <Container disableGutters maxWidth="lg">
      <Box margin={4}>
        <Grid container spacing={3} columns={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={1}>
            <LinkCard
              cardTitle="Equipment"
              cardDescription="All things equipment."
              onLinkClick={() => {
                onPageChange(1);
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              cardTitle="Food"
              cardDescription="Invent the best snack of all time."
              onLinkClick={() => {
                onPageChange(2);
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              cardTitle="Class & skill tree"
              cardDescription="Classes and skills."
              onLinkClick={() => {
                onPageChange(3);
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <LinkCard
              cardTitle="Addons"
              cardDescription="Account-wide effects."
              onLinkClick={() => {
                onPageChange(4);
              }}
            />
          </Grid>
          {/* <Grid item xs={1}>
            <LinkCard
              cardTitle="External effects"
              cardDescription="Effects caused by others."
              onLinkClick={() => {
                onPageChange(5);
              }}
            />
          </Grid> */}
          <Grid item xs={1}>
            <FormContextEditor />
          </Grid>
          <Grid item xs={1}>
            <Card variant="outlined" sx={{ padding: 1 }}>
              <CardHeader
                title="Summary"
                titleTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "x-large",
                }}
              />
              <CardContent>
                <StatView stat={stat} maxHeight="600px" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
