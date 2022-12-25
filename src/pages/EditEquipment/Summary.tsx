import { FC, Fragment, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { BarChart } from "@mui/icons-material";

import { SummaryEquipment } from "../../types";

import SummaryItem from "./SummaryItem";
import { StatObject } from "../../assets";
import { StatView } from "../../components";

type SummaryProps = {
  summary: SummaryEquipment[];
  stat: StatObject;
};
const Summary: FC<SummaryProps> = (props) => {
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
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight="bold" fontSize="large">
              Summary
            </Typography>
            <Button
              size="small"
              startIcon={<BarChart />}
              onClick={handleDialogOpen}
            >
              stats
            </Button>
          </Stack>
          <Grid container columns={{ xs: 1, md: 2 }} spacing={2}>
            {props.summary.map((item, index) => (
              <Grid key={`item-#${index}`} item xs={1}>
                <SummaryItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogState}
        onClose={handleDialogClose}
      >
        <DialogTitle>Stat Summary</DialogTitle>
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

export default Summary;
