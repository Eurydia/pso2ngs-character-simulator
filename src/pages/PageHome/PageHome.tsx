import { FC, Fragment, useState } from "react";
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

import { FormContextEditor, StatView } from "../../components";

import { useActionContext, useFormWeapon } from "../../hooks";
import { StatObject, statObject } from "../../assets";
import { PageEditEquipment } from "../PageEditEquipment";
import { HomeRounded } from "@mui/icons-material";
import { LinkCard } from "./LinkCard";
import { PageEditFood } from "../PageEditFood";

type PageHomeProps = {};
export const PageHome: FC<PageHomeProps> = (props) => {
  const [page, setPage] = useState(0);

  const [appContext, setAppContext] = useActionContext("app-ctx");
  const [statEquipment, setStatEquipment] = useState(statObject());
  const [statFood, setStatFood] = useState(statObject());

  const [formWeapon, setFormWeapon] = useFormWeapon("app");

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
                cardDescription="Edit your equipment"
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
            {/* <Grid item xs={1}>
              <LinkCard
                cardTitle="Class & Skill tree"
                cardDescription="Character class and skills."
              />
            </Grid>
            <Grid item xs={1}>
              <LinkCard
                cardTitle="Addons"
                cardDescription="Account-wide effects."
              />
            </Grid>
            <Grid item xs={1}>
              <LinkCard
                cardTitle="External effects"
                cardDescription="Effects caused by others."
              />
            </Grid>
            <Grid item xs={1} /> */}
            <Grid item xs={1}>
              <FormContextEditor
                formData={appContext}
                onFormDataChange={setAppContext}
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
                  <StatView stat={statEquipment} maxHeight="600px" />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <PageEditEquipment
        isVisible={page === 1}
        context={appContext}
        storageKey="p-equipment"
        onChange={setStatEquipment}
      />
      <PageEditFood
        isVisible={page === 2}
        context={appContext}
        storageKey="p-food"
        onStatChange={setStatFood}
      />
    </Fragment>
  );
};
