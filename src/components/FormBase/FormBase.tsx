import { FC, ReactNode } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

import { StatObject } from "../../assets";

import { StatView } from "../StatView";

import { Layout } from "./Layout";

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
        <Layout
          stat={
            <Box maxHeight="550px" overflow="auto" paddingX={2}>
              <Typography fontSize="large" fontWeight="bold">
                Stat
              </Typography>
              <StatView stat={props.stat} />
            </Box>
          }
        >
          {props.children}
        </Layout>
      </CardContent>
    </Card>
  );
};
