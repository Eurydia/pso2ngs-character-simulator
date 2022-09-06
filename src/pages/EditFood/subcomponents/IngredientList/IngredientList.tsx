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

interface IngredientListItemProps {}
const IngredientListItem: FC<IngredientListItemProps> = (props) => {
  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton>
          <Delete />
        </IconButton>
      }
    >
      <TextField
        size="small"
        type="number"
        sx={{ width: "75px" }}
        inputProps={{ min: 1, max: 10 }}
      />
      <ListItemText secondary="crispy, meat" sx={{ paddingLeft: 2 }}>
        <Typography>Crispy meat</Typography>
      </ListItemText>
    </ListItem>
  );
};

interface IngredientListProps {}
const IngredientList: FC<IngredientListProps> = (props) => {
  const { palette } = useTheme();

  return (
    <List
      subheader={<ListSubheader>Ingredients used 0/10</ListSubheader>}
      sx={{
        height: "500px",
        overflowY: "auto",
      }}
    >
      <ListItem>
        <ListItemText
          primaryTypographyProps={{
            fontStyle: "italic",
            color: alpha(palette.text.secondary, 0.6),
          }}
        >
          No item in recipe.
        </ListItemText>
      </ListItem>
      {/* <IngredientListItem />
      <IngredientListItem />
      <IngredientListItem /> */}
    </List>
  );
};

export default IngredientList;
