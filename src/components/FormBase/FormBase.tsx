import { FC, ReactNode } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";

import { StatObject } from "../../assets";

import StatView from "../StatView";

type FormBaseProps = {
  title: string;
  children: ReactNode | ReactNode[];
  stat: StatObject;
};
export const FormBase: FC<FormBaseProps> = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.title}
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
      />
      <CardContent>
        <Grid container columnSpacing={3} columns={{ sm: 1, md: 2 }}>
          <Grid item xs={1}>
            {props.children}
          </Grid>
          <Grid item xs={1}>
            <Box height="550px" overflow="auto" paddingX={2}>
              <StatView stat={props.stat} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
