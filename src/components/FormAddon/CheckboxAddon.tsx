import {
  CheckBoxOutlineBlankRounded,
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { FC, memo, ReactNode } from "react";

type CheckboxAddonProps = {
  orderNumber: number;
  onClick: () => void;
};
export const CheckboxAddon: FC<CheckboxAddonProps> = memo(
  (props) => {
    const { orderNumber, onClick } = props;
    const checked: boolean = orderNumber > 0;

    let checked_icon: ReactNode = <LooksOneRounded />;
    if (orderNumber === 2) {
      checked_icon = <LooksTwoRounded />;
    }

    return (
      <Checkbox
        icon={<CheckBoxOutlineBlankRounded />}
        checkedIcon={checked_icon}
        checked={checked}
        onClick={onClick}
      />
    );
  },
  (prev, next) => {
    return prev.orderNumber === next.orderNumber;
  },
);
