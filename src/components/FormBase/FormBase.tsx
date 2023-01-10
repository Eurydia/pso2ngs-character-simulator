import { FC, Fragment, ReactNode, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";

import { Layout } from "./Layout";
import { BuildRounded } from "@mui/icons-material";

type FormBaseProps = {
  cardTitle: string;
  slotCardHeaderAction: ReactNode;
  slotCardContent: ReactNode;
  slotCardAction: ReactNode;

  slotDialogTitle: ReactNode;
  slotDialogContent: ReactNode;
};
export const FormBase: FC<FormBaseProps> = (props) => {
  const {
    cardTitle,
    slotCardHeaderAction,
    slotCardContent,
    slotCardAction,
    slotDialogTitle,
    slotDialogContent,
  } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <Fragment>
      <Card variant="outlined" sx={{ padding: 1 }}>
        <CardHeader
          title={cardTitle}
          action={slotCardHeaderAction}
          titleTypographyProps={{
            fontWeight: "bold",
            fontSize: "x-large",
          }}
        />
        <CardContent>{slotCardContent}</CardContent>
        <CardActions disableSpacing>
          <Stack spacing={1}>
            <Button
              startIcon={<BuildRounded />}
              onClick={handleDialogOpen}
            >
              open editor
            </Button>
          </Stack>
        </CardActions>
      </Card>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{slotDialogTitle}</DialogTitle>
        <DialogContent>{slotDialogContent}</DialogContent>
      </Dialog>
    </Fragment>
  );
};
