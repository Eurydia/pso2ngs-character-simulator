import { FC, Fragment, ReactNode, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { BarChart } from "@mui/icons-material";
import StatView from "../StatView";
import { StatObject } from "../../assets";

type FormBaseProps = {
  title: string;
  children: ReactNode | ReactNode[];
  stat: StatObject;
};
const FormBase: FC<FormBaseProps> = (props) => {
  const theme = useTheme();

  const [dialogState, setDialogState] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setDialogState(true);
  };

  const handleDialogClose = () => {
    setDialogState(false);
  };

  return (
    <Fragment>
      <Paper>
        <Box padding={2}>
          <Stack spacing={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontWeight="bold" fontSize="large">
                {props.title}
              </Typography>

              <Button
                size="small"
                color="primary"
                startIcon={<BarChart />}
                onClick={handleDialogOpen}
              >
                stats
              </Button>
            </Stack>
            {props.children}
          </Stack>
        </Box>
      </Paper>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogState}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`Stats for ${props.title}`}</DialogTitle>
        <DialogContent>
          <StatView disablePadding stat={props.stat} />
        </DialogContent>
        <DialogActions disableSpacing>
          <Button onClick={handleDialogClose}>okay</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FormBase;
