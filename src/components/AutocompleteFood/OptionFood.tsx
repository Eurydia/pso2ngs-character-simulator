import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";
import { Food } from "../../assets";

type OptionFoodProps = {
  LIProps: HTMLAttributes<HTMLLIElement>;
  option: Food;
};
export const OptionFood: FC<OptionFoodProps> = (props) => {
  const { option, LIProps } = props;
  return (
    <MenuItem {...LIProps}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
