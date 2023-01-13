import { FC } from "react";
import { HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Weapon } from "../../assets";

type WeaponOptionProps = HTMLAttributes<HTMLLIElement> & {
  option: Weapon;
};
export const WeaponOption: FC<WeaponOptionProps> = (props) => {
  const { option, ...rest } = props;
  return (
    <MenuItem {...rest}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
