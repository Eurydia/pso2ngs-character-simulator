import { FC } from "react";
import {
  alpha,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const FoodItem: FC<{}> = (props) => {
  return (
    <Paper
      component={ListItem}
      variant="outlined"
      secondaryAction={
        <IconButton>
          <Delete />
        </IconButton>
      }
    >
      <ListItemIcon>
        <TextField
          size="small"
          type="number"
          sx={{ width: "75px" }}
          inputProps={{ min: 1, max: 10 }}
        />
      </ListItemIcon>
      <ListItemText secondary="crispy, meat" sx={{ paddingLeft: 2 }}>
        <Typography>Crispy meat</Typography>
      </ListItemText>
    </Paper>
  );
};

interface RecipeDisplayProps {}
const RecipeDisplay: FC<RecipeDisplayProps> = (props) => {
  const { palette } = useTheme();

  return (
    <Box>
      <List
        sx={{
          height: "500px",
          overflowY: "auto",
        }}
        subheader={<ListSubheader>Used 0/10</ListSubheader>}
      >
        {/* <Typography
          fontStyle="italic"
          color={alpha(palette.text.secondary, 0.6)}
        >
          No item in recipe.
        </Typography> */}
        <FoodItem />
        <FoodItem />
        <FoodItem />
      </List>
    </Box>
  );
};

export default RecipeDisplay;
