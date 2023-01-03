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
          slot_a={props.children}
          slot_b={<StatView stat={props.stat} />}
        />
      </CardContent>
    </Card>
  );
};
