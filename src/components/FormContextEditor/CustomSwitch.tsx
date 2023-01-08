import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC, ReactNode } from "react";

type CustomSwitchProps = {
  slotLabel: string;
  slotTooltip: string;
  checked: boolean | undefined;
  onClick: () => void;
};
export const CustomSwitch: FC<CustomSwitchProps> = (props) => {
  const { slotLabel, slotTooltip, checked, onClick } = props;

  let label = <Typography>{slotLabel}</Typography>;
  if (Boolean(slotTooltip)) {
    label = (
      <Tooltip
        placement="top"
        title={<Typography paragraph>{slotTooltip}</Typography>}
      >
        {label}
      </Tooltip>
    );
  }

  return (
    <FormControlLabel
      labelPlacement="end"
      label={label}
      control={
        <Switch checked={Boolean(checked)} onClick={onClick} />
      }
    />
  );
};
