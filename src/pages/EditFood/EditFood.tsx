import { FC } from "react";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { Add, BarChart } from "@mui/icons-material";
import EffectDisplay from "./subcomponents/EffectList";
import RecipeDisplay from "./subcomponents/IngredientList";
import DialogIngredientList from "./subcomponents/DialogIngredientList";

interface FoodEditProps {}
const FoodEdit: FC<FoodEditProps> = () => {
  return (
    <Box>
      <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
        <Grid item xs={1}>
          <Card variant="outlined">
            <CardHeader title="Recipe Editor" />
            <CardContent>
              <Stack width={1} position="relative">
                <RecipeDisplay />
                <Fab
                  color="primary"
                  size="medium"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: "0.5rem",
                  }}
                >
                  <Add />
                </Fab>
              </Stack>
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
      <Dialog open={false} fullWidth maxWidth="sm">
        <DialogTitle>Select ingredient(s)</DialogTitle>
        <DialogContent>
          <Stack paddingY={1}>
            <TextField fullWidth label="search" size="small" />
            <DialogIngredientList />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button>cancel</Button>
          <Button>confirm</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FoodEdit;
