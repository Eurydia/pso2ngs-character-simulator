import { FC, Fragment, ReactNode, useState } from "react";
import { BarChartRounded, BuildRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

type LinkCardProps = {
  cardTitle: string;
  cardDescription: string;
  slotDialogContent: ReactNode;
};
export const LinkCard: FC<LinkCardProps> = (props) => {
  const { cardTitle, cardDescription, slotDialogContent } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Fragment>
      <Card variant="outlined" sx={{ padding: 1 }}>
        <CardHeader
          title={cardTitle}
          titleTypographyProps={{
            fontWeight: "bold",
            fontSize: "x-large",
          }}
          // action={
          //   <IconButton>
          //     <BarChartRounded />
          //   </IconButton>
          // }
        />
        <CardContent>
          <Typography paragraph>{cardDescription}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            disableRipple
            disableFocusRipple
            disableTouchRipple
            startIcon={<BuildRounded fontSize="small" />}
            onClick={handleDialogOpen}
          >
            open editor
          </Button>
        </CardActions>
      </Card>
      <Dialog
        fullWidth
        maxWidth="md"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogContent>{slotDialogContent}</DialogContent>
      </Dialog>
    </Fragment>
  );
};
