import { FC, Fragment, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { HomeRounded } from "@mui/icons-material";

import { FormContextEditor, StatView } from "../../components";
import { StatObject, statObject } from "../../assets";
import { useActionContext } from "../../hooks";

import { PageEditEquipment } from "../PageEditEquipment";
import { PageEditFood } from "../PageEditFood";
import { PageEditAddon } from "../PageEditAddon";

import { LinkCard } from "./LinkCard";

type PageHomeProps = {};
export const PageHome: FC<PageHomeProps> = (props) => {
  const [page, setPage] = useState(0);

  const [contextApp, setContextApp] = useActionContext("app-ctx");

  const [statEquipment, setStatEquipment] = useState(statObject());
  const [statFood, setStatFood] = useState(statObject());
  const [statAddon, setStatAddon] = useState(statObject());

  const stat_total = useMemo(() => {
    let stat = StatObject.merge(statEquipment, statFood);
    return StatObject.merge(stat, statAddon);
  }, [statEquipment, statFood, statAddon]);

  return (
    <Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Tooltip
            placement="top"
            title={<Typography>Home</Typography>}
          >
            <span>
              <IconButton
                onClick={() => {
                  return setPage(0);
                }}
              >
                <HomeRounded />
              </IconButton>
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          display: page === 0 ? "block" : "none",
        }}
      >
        <Box margin={4}>
          <Grid container spacing={2} columns={{ xs: 1, md: 2 }}>
            <Grid item xs={1}>
              <LinkCard
                cardTitle="Equipment"
                cardDescription="All things equipment."
                onLinkClick={() => {
                  setPage(1);
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <LinkCard
                cardTitle="Food"
                cardDescription="Invent the best snack of all time."
                onLinkClick={() => {
                  setPage(2);
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <LinkCard
                cardTitle="Class & skill tree"
                cardDescription="Classes and skills."
                onLinkClick={() => {
                  setPage(3);
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <LinkCard
                cardTitle="Addons"
                cardDescription="Account-wide effects."
                onLinkClick={() => {
                  setPage(4);
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <LinkCard
                cardTitle="External effects"
                cardDescription="Effects caused by others."
                onLinkClick={() => {
                  setPage(5);
                }}
              />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <FormContextEditor
                formData={contextApp}
                onFormDataChange={setContextApp}
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
                  <StatView stat={stat_total} maxHeight="600px" />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <PageEditEquipment
        isVisible={page === 1}
        context={contextApp}
        pageStorageKey="p-equipment"
        onStatChange={setStatEquipment}
      />
      <PageEditFood
        isVisible={page === 2}
        context={contextApp}
        pageStorageKey="p-food"
        onStatChange={setStatFood}
      />
      <PageEditAddon
        isVisible={page === 4}
        context={contextApp}
        pageStorageKey="p-addon"
        onStatChange={setStatAddon}
      />
    </Fragment>
  );
};
