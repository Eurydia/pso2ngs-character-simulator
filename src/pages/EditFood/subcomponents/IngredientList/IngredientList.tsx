import { FC } from "react";
import {
  alpha,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
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
      dense
      disablePadding
      subheader={
        <ListSubheader disableGutters disableSticky>
          0/10 ingredients used
        </ListSubheader>
      }
      sx={{
        height: "500px",
        overflowY: "auto",
      }}
    >
      <ListItem disablePadding>
        <ListItemText
          primaryTypographyProps={{
            fontStyle: "italic",
            color: alpha(palette.text.secondary, 0.6),
          }}
        >
          No item in recipe.
        </ListItemText>
      </ListItem>
      <IngredientListItem />
      <IngredientListItem />
      <IngredientListItem />
    </List>
  );
};

export default IngredientList;
