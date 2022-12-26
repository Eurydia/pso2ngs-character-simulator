import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { SummaryEquipment } from "../../types";

type SummaryItemProps = SummaryEquipment;
const SummaryItem: FC<SummaryItemProps> = (props) => {
  return (
    <Box>
      <Typography fontWeight="bold">{props.equipment}</Typography>
      <Typography>{props.fixa}</Typography>
      {props.augments.map((value, index) => (
        <Typography key={`${value}-${index}`}>{value}</Typography>
      ))}
    </Box>
  );
};

export default SummaryItem;
