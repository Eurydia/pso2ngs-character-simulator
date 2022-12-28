import { FC, ReactNode } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";

import { StatObject } from "../../assets";

import StatView from "../StatView";

type FormBaseProps = {
  title: string;
  children: ReactNode | ReactNode[];
  stat: StatObject;
};
const FormBase: FC<FormBaseProps> = (props) => {
  return (
    <Card sx={{ padding: 2 }}>
      {/* <CardActions>
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
        </CardActions> */}
      <CardHeader
        title={props.title}
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
      />
      <CardContent>
        <Grid container columnSpacing={3} columns={{ sm: 1, md: 2 }}>
          <Grid item xs={1}>
            {props.children}
          </Grid>
          <Grid item xs={1}>
            <Box height="580px" overflow="auto" paddingX={2}>
              <StatView stat={props.stat} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      {/* <Dialog
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
          </Dialog> */}
    </Card>
  );
};

export default FormBase;
