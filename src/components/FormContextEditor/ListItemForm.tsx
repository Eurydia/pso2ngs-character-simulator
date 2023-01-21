import {
  CheckBoxOutlineBlankRounded,
  CheckBoxRounded,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import { FC, memo, useMemo } from "react";

type ListItemFormProps = {
  labelOn: string;
  labelOff?: string | undefined;

  checked: boolean;

  onClick: () => void;
};
export const ListItemForm: FC<ListItemFormProps> = memo(
  (props) => {
    const { labelOn, labelOff, checked, onClick } = props;

    const label = useMemo((): string => {
      if (labelOff === undefined) {
        return labelOn;
      }
      if (!checked) {
        return labelOff;
      }
      return labelOn;
    }, [checked]);

    return (
      <ListItem dense disableGutters>
        <ListItemIcon>
          <Switch checked={checked} onClick={onClick} />
        </ListItemIcon>
        <ListItemText>
          <Typography>{label}</Typography>
        </ListItemText>
      </ListItem>
    );
  },
  (prev, next) => {
    return prev.checked === next.checked;
  },
);
