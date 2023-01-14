import { IconButton, Tooltip, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

type IconButtonTooltipProps = {
  icon: ReactNode;
  tooltipText: string;
  onClick: () => void;
};
export const IconButtonTooltip: FC<IconButtonTooltipProps> = (
  props,
) => {
  const { icon, tooltipText, onClick } = props;
  return (
    <Tooltip
      placement="top"
      title={<Typography>{tooltipText}</Typography>}
    >
      <IconButton onClick={onClick}>{icon}</IconButton>
    </Tooltip>
  );
};
