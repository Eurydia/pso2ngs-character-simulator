import {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Tooltip,
  Typography,
} from "@mui/material";

import { statObject, StatObject } from "../../assets";
import { FormFood, StatView } from "../../components";
import { BarChartRounded } from "@mui/icons-material";

type PageEditFoodProps = {
  onStatChange: (next_stat: StatObject) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { onStatChange } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback((): void => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback((): void => {
    setDialogOpen(false);
  }, []);

  const [stat, setStat] = useState((): StatObject => {
    return statObject();
  });

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  return (
    <Fragment>
      <Tooltip
        placement="top"
        title={<Typography>Open summary</Typography>}
      >
        <Fab
          onClick={handleDialogOpen}
          sx={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
          }}
        >
          <BarChartRounded color="primary" />
        </Fab>
      </Tooltip>
      <Container maxWidth="sm">
        <Box marginY={4}>
          <FormFood onStatChange={setStat} />
        </Box>
      </Container>
      <Dialog
        fullWidth
        keepMounted
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          <Typography fontWeight="bold" fontSize="x-large">
            Food summary
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
