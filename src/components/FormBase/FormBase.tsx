import { FC, ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

import { Layout } from "./Layout";

type FormBaseProps = {
  title: string;
  children: ReactNode | ReactNode[];
  slot_secondary: ReactNode | ReactNode[];
};
export const FormBase: FC<FormBaseProps> = (props) => {
  const { title, children, slot_secondary } = props;

  return (
    <Card sx={{ padding: 1 }}>
      <CardHeader
        title={title}
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
      />
      <CardContent>
        <Layout
          slot_primary={children}
          slot_secondary={slot_secondary}
        />
      </CardContent>
    </Card>
  );
};
