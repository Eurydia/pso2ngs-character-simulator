import { FC } from "react";
import { HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Weapon } from "../../assets";

type OptionWeaponProps = {
  LIProps: HTMLAttributes<HTMLLIElement>;
  option: Weapon;
};
export const OptionWeapon: FC<OptionWeaponProps> = (props) => {
  const { option, LIProps } = props;
  return (
    <MenuItem {...LIProps}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
