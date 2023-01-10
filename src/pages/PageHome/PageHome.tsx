import { FC, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from "@mui/material";

import { FormContextEditor, FormWeapon } from "../../components";

import { useActionContext, useFormWeapon } from "../../hooks";
import { StatObject, statObject } from "../../assets";
import { PageEditEquipment } from "../PageEditEquipment";

type PageHomeProps = {};
export const PageHome: FC<PageHomeProps> = (props) => {
  const [appContext, setAppContext] = useActionContext("app-ctx");
  const [statEquipment, setStatEquipment] = useState<StatObject>(
    statObject(),
  );

  const [formWeapon, setFormWeapon] = useFormWeapon("app");

  return (
    <Container maxWidth="lg">
      <Box margin={4}>
        <PageEditEquipment
          context={appContext}
          storageKey="p-eq"
          onChange={setStatEquipment}
        />
        <Grid container spacing={2} columns={{ xs: 1, md: 2 }}>
          {/* <Grid item xs={1}>
            <LinkCard
              cardTitle="Food"
              cardDescription="Invent the best snack of all time."
            />
          </Grid>
          <Grid item xs={1}>
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
                {/* <StatView stat={stat} maxHeight="600px" /> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
