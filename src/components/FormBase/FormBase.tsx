import { FC, ReactNode } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";

import { Layout } from "./Layout";

type FormBaseProps = {
  title: string;
  slotPrimary: ReactNode | ReactNode[];
  slotSecondary: ReactNode | ReactNode[];
  slotHeaderAction: ReactNode | ReactNode[];
};
export const FormBase: FC<FormBaseProps> = (props) => {
  const { title, slotPrimary, slotSecondary, slotHeaderAction } =
    props;

  return (
    <Card sx={{ padding: 1 }}>
      <CardHeader
        action={slotHeaderAction}
        title={title}
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
      />
      <CardContent>
        <Layout
          slotPrimary={slotPrimary}
          slotSecondary={slotSecondary}
        />
      </CardContent>
    </Card>
  );
};
