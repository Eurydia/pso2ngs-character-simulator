import { FC } from "react";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import EffectDisplay from "./subcomponents/ActiveBuffList";
import RecipeDisplay from "./subcomponents/RecipeDisplay";

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
          <List
            subheader={
              <ListSubheader>Pick one or more</ListSubheader>
            }
          >
            <ListItem dense>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox disableRipple />
                </ListItemIcon>
                <ListItemText secondary="crispy, meat, anti-cold">
                  crispy meat
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem dense>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox disableRipple />
                </ListItemIcon>
                <ListItemText secondary="crispy, meat, anti-cold">
                  crispy meat
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
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
