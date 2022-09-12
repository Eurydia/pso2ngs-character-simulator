import { FC, Fragment, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import EffectDisplay from "./subcomponents/EffectList";
import RecipeDisplay from "./subcomponents/IngredientList";
import DialogIngredientList from "./subcomponents/DialogIngredientList";

interface FoodEditProps {}
const FoodEdit: FC<FoodEditProps> = () => {
  const [dialogState, setDialogState] = useState(false);

  const handleDialogOpen = () => {
    setDialogState(true);
  };

  const handleDialogClose = () => {
    setDialogState(false);
  };

  return (
    <Fragment>
      <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
        <Grid item xs={1}>
          <Card raised>
            <CardHeader title="Recipe Editor" />
            <CardContent>
              <RecipeDisplay />
              <Box width={1} position="relative">
                <Fab
                  color="primary"
                  size="medium"
                  onClick={handleDialogOpen}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: "0.5rem",
                  }}
                >
                  <Add />
                </Fab>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card variant="outlined">
            <CardHeader title="Active Buffs" />
            <CardContent>
              <EffectDisplay />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={dialogState}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Select ingredient(s)</DialogTitle>
        <DialogContent>
          <Stack paddingY={1}>
            <TextField fullWidth label="search" size="small" />
            <DialogIngredientList />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>cancel</Button>
          <Button onClick={handleDialogClose}>confirm</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default FoodEdit;
