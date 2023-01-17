import { FC, ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

type FormBaseProps = {
  cardTitle: ReactNode;
  slotCardHeaderAvatar: ReactNode;
  slotCardHeaderAction: ReactNode;
  slotCardContent: ReactNode;
};
export const FormBase: FC<FormBaseProps> = (props) => {
  const {
    cardTitle,
    slotCardHeaderAvatar,
    slotCardHeaderAction,
    slotCardContent,
  } = props;

  return (
    <Card variant="outlined" sx={{ padding: 1 }}>
      <CardHeader
        title={cardTitle}
        avatar={slotCardHeaderAvatar}
        action={slotCardHeaderAction}
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
      />
      <CardContent>{slotCardContent}</CardContent>
    </Card>
  );
};
