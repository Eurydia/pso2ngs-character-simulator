import { FC, Fragment, ReactNode, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

import { StatObject } from "../../assets";

import StatView from "../StatView";

type FormBaseProps = {
  showAlert?: boolean;
  title: string;
  children: ReactNode | ReactNode[];
  dialogTitle: string;
  dialogStat: StatObject;
};
const FormBase: FC<FormBaseProps> = (props) => {
  const [dialogState, setDialogState] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogState(true);
  };

  const handleDialogClose = () => {
    setDialogState(false);
  };

  return (
    <Fragment>
      <Card component={Box} padding={2}>
        <CardActions>
          <Button
            disableElevation
            disableRipple
            color="primary"
            variant="contained"
            startIcon={<Visibility />}
            onClick={handleDialogOpen}
          >
            stats
          </Button>
        </CardActions>
        <CardHeader
          title={props.title}
          titleTypographyProps={{
            fontWeight: "bold",
            fontSize: "x-large",
          }}
        />
        <CardContent>{props.children}</CardContent>
      </Card>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogState}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          <Typography fontSize="large" fontWeight="bold">
            {props.dialogTitle}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StatView stat={props.dialogStat} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>okay</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FormBase;
